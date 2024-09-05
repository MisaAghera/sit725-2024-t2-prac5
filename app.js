const express = require('express');
const path = require('path');
const appRoutes = require('./routes/carRoutes');

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', appRoutes);

// Start Server and Connect to MongoDB
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
