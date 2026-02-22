exports.login = async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (!user || user.password !== password) {  // Plain compare
    return res.status(401).json({ error: 'Invalid credentials' });
  }
  // JWT same
};
