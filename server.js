const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));

// Halaman utama
app.get('/', (req, res) => {
    res.send(`
        <html>
        <head>
            <title>Home</title>
            <style>
                body { font-family: Arial, sans-serif; text-align: center; margin-top: 50px; }
                h1 { color: #333; }
                .btn { background-color: #007BFF; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; display: inline-block; margin-top: 20px; }
                .btn:hover { background-color: #0056b3; }
            </style>
        </head>
        <body>
            <h1>Hello, World!</h1>
            <a href="/form" class="btn">Go to Form</a>
        </body>
        </html>
    `);
});

// Halaman form
app.get('/form', (req, res) => {
    res.send(`
        <html>
        <head>
            <title>Form Page</title>
            <style>
                body { font-family: Arial, sans-serif; text-align: center; margin-top: 50px; }
                h1 { color: #333; }
                form { display: inline-block; padding: 20px; border-radius: 10px; background: #f4f4f4; }
                input { display: block; margin: 10px auto; padding: 8px; width: 80%; max-width: 300px; }
                button { background-color: #28a745; color: white; padding: 10px 20px; border: none; border-radius: 5px; cursor: pointer; }
                button:hover { background-color: #218838; }
            </style>
        </head>
        <body>
            <h1>Input Your Data</h1>
            <form action="/submit" method="post">
                <input type="text" name="name" placeholder="Enter your name" required>
                <input type="email" name="email" placeholder="Enter your email" required>
                <button type="submit">Submit</button>
            </form>
        </body>
        </html>
    `);
});

// Handle form submission
app.post('/submit', (req, res) => {
    const { name, email } = req.body;
    res.send(`
        <html>
        <head>
            <title>Submission Result</title>
            <style>
                body { font-family: Arial, sans-serif; text-align: center; margin-top: 50px; }
                h1 { color: #28a745; }
                p { font-size: 18px; }
                .btn { background-color: #007BFF; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; display: inline-block; margin-top: 20px; }
                .btn:hover { background-color: #0056b3; }
            </style>
        </head>
        <body>
            <h1>Thank You, ${name}!</h1>
            <p>Your email: <strong>${email}</strong></p>
            <a href="/" class="btn">Back to Home</a>
        </body>
        </html>
    `);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
