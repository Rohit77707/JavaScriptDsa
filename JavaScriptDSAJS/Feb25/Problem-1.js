

// Javascript program to count occurrences of an elt in an sorted array
	// Returns number of times x occurs in arr[0..n-1]
	function findnum(arr,n,targetnum)
	{
		let res = 0;
		for (let i=0; i<n; i++)
		{
			if (targetnum == arr[i])
				res++;
		}
		return res;
	}
	
	arr=[1,1,2,2,4,5,5,6,6,6,6,9,10,11]
	let n = arr.length;
	let targetnum = 6;
	console.log(findnum(arr, n, targetnum));
	
	

