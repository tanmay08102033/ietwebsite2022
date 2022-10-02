let Url = "./js/teamDet.json";
$.ajax({
    url: Url,
    async: false,
    method: "GET",
    success: function(res) {
        for (var i = 0; i < res.team2.length; i++) {
            $("#teamDiv2").append(`   <div class="col-lg-4">
      <div class="single_team2">
        <div class="team2_image">
          <img src=${res.team2[i].imagePath} alt="team2" class="img-fluid">
          <ul class="social">
            <li><a href="${res.team2[i].Linkedin_Profile_Link}" target="_blank" rel="noopener"><i class="fab fa-linkedin-in"></i></a></li>
          </ul>
        </div>
        <div class="team2_content">
          <h4 class="team2_name">${res.team2[i].Name}</h4>
          <p>${res.team2[i].Position}</p>
          <p>${res.team2[i].Body}</p>
        </div>
      </div>
    </div>`);
        }
    },
    error: function(err) {
        console.log(err);
    },
});