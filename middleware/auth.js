function checkAuth(req, res, next) {
	// Check req.session.loggedIn to see if the user is logged in
	// If the user is logged in, call next()
	if (req.session.loggedIn) {
		next()
	// If the user is not logged in, redirect to /login
} else if (!req.session.loggedIn) {
	return res.redirect('/login')
	}
}

module.exports = checkAuth
