// API route to handle email sending
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, message } = req.body;
    
    // Simple validation
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }
    
    // Construct payload for EmailJS - match playground example exactly
    const payload = {
      service_id: 'default_service', // Use default_service as shown in playground
      template_id: 'template_0hxnkri',
      user_id: 'czDSnMGqNfHFs5d_s',
      template_params: {
        title: `Contact from ${name}`, // Add title field
        name: name,
        time: new Date().toLocaleString(),
        message: message,
        email: email // Add email field
      }
    };

    console.log('Sending payload to EmailJS:', JSON.stringify(payload));

    // Send email using EmailJS REST API directly
    const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Origin': 'http://localhost:3000'
      },
      body: JSON.stringify(payload)
    });

    console.log('EmailJS response status:', response.status);
    
    if (response.ok) {
      return res.status(200).json({ success: true });
    } else {
      let errorText = 'Unknown error';
      try {
        const errorData = await response.text();
        console.error('EmailJS error response:', errorData);
        errorText = errorData;
      } catch (e) {
        console.error('Error parsing EmailJS error:', e);
      }
      
      return res.status(500).json({ 
        error: 'Failed to send email', 
        details: errorText 
      });
    }
  } catch (error) {
    console.error('Email sending error:', error);
    return res.status(500).json({ 
      error: 'Failed to send email',
      details: error.message
    });
  }
} 