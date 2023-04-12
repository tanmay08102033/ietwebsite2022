let Url = "./js/teamDetails.json";
$.ajax({
    url: Url,
    async: false,
    method: "GET",
    success: function(res) {
        for (var i = 0; i < res.team.length; i++) {
            $("#teamDiv").append(`   <div class="col-lg-4">
      <div class="single_team">
        <div class="team_image">
          <img src=${res.team[i].imagePath} alt="team" class="img-fluid">
          <ul class="social">
            <li><a href="${res.team[i].Linkedin_Profile_Link}" target="_blank" rel="noopener"><i class="fab fa-linkedin-in"></i></a></li>
          </ul>
        </div>
        <div class="team_content">
          <h4 class="team_name">${res.team[i].Name}</h4>
          <p>${res.team[i].Position}</p>
          <p>${res.team[i].Body}</p>
        </div>
      </div>
    </div>`);
        }
    },
    error: function(err) {
        console.log(err);
    },
});