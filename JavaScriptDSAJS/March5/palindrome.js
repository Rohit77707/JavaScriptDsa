
	// A recursive javascript program to
	// check whether a given String
	// is palindrome or not
	// A recursive function that
	// check a str(s..e) is
	// palindrome or not.
	function isPalRec( str , s , e) {
		// If there is only one character
		if (s == e)
			return true;

		// If first and last
		// characters do not match
		if ((str.charAt(s)) != (str.charAt(e)))
			return false;

		// If there are more than
		// two characters, check if
		// middle substring is also
		// palindrome or not.
		if (s < e + 1)
			return isPalRec(str, s + 1, e - 1);

		return true;
	}

	function isPalindrome( str) {
		var n = str.length;

		// An empty string is
		// considered as palindrome
		if (n == 0)
			return true;

		return isPalRec(str, 0, n - 1);
	}

	// Driver Code
	
		var str = "pap";

		if (isPalindrome(str))
			console.log("Yes");
		else
			console.log("No")
