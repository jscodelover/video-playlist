var playlist_data = [];
$(document).ready(() => {
	fetch('https://www.googleapis.com/youtube/v3/playlistItems?key=AIzaSyAOYG1Ai4mZy6L-ifZgQ8bzS87vA6v3JdA&playlistId=PLfSLUhwiqvWvfh3Ynhg9fjGYBlHTg7lJ9&part=snippet,contentDetails&maxResults=25')
	  .then(promise => promise.json())
	  .then(promise_array => { 
	  	playlist_data.push(...promise_array.items);
	  	playlist_data.map(video => {
	  		let box = `<div class="box" onclick="disp_video(id)" id=${video.contentDetails.videoId}> <img src=${video.snippet.thumbnails.default.url} <span> ${video.snippet.title} </span> <hr/></div>`
	  		$("#playlist").append(box); 
	  	})
	  });
	 
});

 function disp_video(id)  {
	$('#video').attr('src', `https://www.youtube.com/embed/${id}`)
	$("html, body").animate({ scrollTop: 0 }, "slow");
}

