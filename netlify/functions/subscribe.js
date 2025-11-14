// netlify/functions/subscribe.js

exports.handler = async (event) => {
  // Only allow POST requests
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method Not Allowed" }),
    };
  }

  // Check if body exists
  if (!event.body) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "No data provided" }),
    };
  }

  // Safely parse JSON body
  let data;
  try {
    data = JSON.parse(event.body);
  } catch (err) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Invalid JSON" }),
    };
  }

  const { email } = data;

  if (!email) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Email is required" }),
    };
  }

  // Mailchimp configuration
  const API_KEY = process.env.MAILCHIMP_API_KEY;
  const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;

  if (!API_KEY || !AUDIENCE_ID) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Mailchimp environment variables not set" }),
    };
  }

  const DATACENTER = API_KEY.split("-")[1]; // e.g., "us16"
  const url = `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`;

  // Prepare subscriber data
  const subscriber = {
    email_address: email,
    status: "subscribed", // automatically subscribes
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `apikey ${API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(subscriber),
    });

    const result = await response.json();

    // Handle errors
    if (response.status >= 400) {
      console.log("Mailchimp error:", result);

      if (result.title === "Member Exists") {
        return {
          statusCode: 200,
          body: JSON.stringify({ success: true, message: "Already subscribed" }),
        };
      }

      return {
        statusCode: response.status,
        body: JSON.stringify({ success: false, error: result }),
      };
    }

    // Success
    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, message: "Success! You're subscribed." }),
    };
  } catch (err) {
    console.error("Function error:", err);
    return {
      statusCode: 500,
      body: JSON.stringify({ success: false, error: "Internal server error" }),
    };
  }
};
