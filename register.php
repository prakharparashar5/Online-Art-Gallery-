<?php
$message = '';
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = $_POST['username'] ?? '';
    $email = $_POST['email'] ?? '';
    $password = $_POST['password'] ?? '';

    if ($username && $email && $password) {
        $db = new SQLite3('arthub.db');
        // Create table if not exists
        $db->exec('CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            username TEXT UNIQUE,
            email TEXT UNIQUE,
            password_hash TEXT,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )');
        $stmt = $db->prepare('INSERT INTO users (username, email, password_hash) VALUES (:username, :email, :password_hash)');
        $stmt->bindValue(':username', $username, SQLITE3_TEXT);
        $stmt->bindValue(':email', $email, SQLITE3_TEXT);
        $stmt->bindValue(':password_hash', password_hash($password, PASSWORD_DEFAULT), SQLITE3_TEXT);
        $result = $stmt->execute();
        if ($result) {
            $message = 'Registration successful!';
        } else {
            $message = 'Registration failed: ' . $db->lastErrorMsg();
        }
    } else {
        $message = 'Please fill in all fields.';
    }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Register</title>
</head>
<body>
    <h2>Register</h2>
    <?php if ($message) echo '<p>' . htmlspecialchars($message) . '</p>'; ?>
    <form method="POST" action="">
        <label>Username: <input type="text" name="username" required></label><br>
        <label>Email: <input type="email" name="email" required></label><br>
        <label>Password: <input type="password" name="password" required></label><br>
        <button type="submit">Register</button>
    </form>
</body>
</html>
