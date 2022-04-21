<!DOCTYPE HTML>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content"widtg=device-width,intial-scale=1.0">
	<title>Get method</title>
	<style>
		.align{
			text-align:center;
		}
	<style>
</head>
<body>
	<h1 class="align">JavaScript's Fetch API</h1>
	<h2 class="align">GET Method</h1>
	<script>
		fetch('https://jsonplaceholder.typicode.com/tool/')
		.then(response =>response.json())
		.then(data =>console.log(data))
		fetch('https://jsonplaceholder.typicode.com/tool/',{
		method: 'post',
		headers: {'content-type': 'application/json'},
		body: JSON.stringify({
			userId: 6,
			id: 300,
			title: "Learn fetch api",
			completed: false
		})
	})
	.then(response =>response.json())
	.then(data =>console.log(data))
		fetch('https://jsonplaceholder.typicode.com/tool/',{
		method: 'PUT',
		headers: {'content-type': 'application/json'},
		body: JSON.stringify({
			userId: 1,
			id: 5,
			title: "hello fetch api",
			completed: false
		})
	})
	.then(response =>response.json())
	.then(data =>console.log(data))
		fetch('https://jsonplaceholder.typicode.com/tool/',{
		method: "DELETE"
	})
	.then(response =>response.json())
	.then(data =>console.log(data))
	</script>
</body>
</html>
	


