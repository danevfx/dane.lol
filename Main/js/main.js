function donateMsg() {
    Swal.fire({
        title: '<b style="color: white;">Buy me a coffee!',
        icon: 'none',
        html:
          '<p style="color: white;">If you enjoy the projects on my site and would like to support me in any way, please consider donating to me below. Donations are not expected at all but are very much appreciated! :)</p>' +
          '<p><a style="color: #0079C1;" href="https://paypal.me/daaane" style="text-decoration: none;"><b><i class="fa-brands fa-paypal"></i> PayPal</b></a></p>' +
          '<p><a style="color: #00C244;" href="https://cash.app/$daneffx" style="text-decoration: none;"><b><i class="fa-solid fa-dollar-sign"></i> Cash App</b></a></p>' +
          '<p style="color: #f7931a;"><b><i class="fa-brands fa-bitcoin"></i> <u>BITCOIN:</u> <i style="color: white;">bc1qyevcm5ct2e238fdc44jau46galpq6xxd5xdxuj</i></b></p>' +
          '<p style="color: #a05cff;"><b><i class="fa-brands fa-ethereum"></i> <u>ETHEREUM:</u> <i style="color: white;">0x7e31dF204247A3b9661D109783218e231959a1E4</i></b></p>' +
          '<p style="color: #2a71d0;"><b><i class="fa-solid fa-coins"></i> <u>CARDANO:</u> <i style="color: white;">addr1qxy49lgx9mnqts0f3kwxm2ltr3qfuxngh49pk5kacqhx7sdg4gch48g35fap6a4y3fup3pzjam06yukhnzatdlktghdq9unjew</i></b></p>' +
          '<p style="color: white;">Thank you!</p>',
        showCloseButton: false,
        showCancelButton: false,
        background: '#363636',
        confirmButtonColor: "#ffffff",
        confirmButtonText:
          'Close',
        confirmButtonAriaLabel: 'Close',
      })
}