function donateMsg() {
    Swal.fire({
        title: '<b style="color: black;">Buy me a beer! <i class="fa-solid fa-beer-mug-empty"></i>',
        icon: 'none',
        html:
          '<p style="color: black; font-size: 12px;">If you enjoy the projects on my site and would like to support me in any way, please consider donating to me below. Donations are not expected at all but are very much appreciated! </p>' +
          '<p><a style="color: #0079C1; font-size: 13px; text-decoration: none;" href="https://paypal.me/daaane"><b><i class="fa-brands fa-paypal"></i> PayPal</b></a></p>' +
          '<p><a style="color: #00C244; font-size: 13px; text-decoration: none;" href="https://cash.app/$daneffx" style="text-decoration: none;"><b><i class="fa-solid fa-dollar-sign"></i> Cash App</b></a></p>' +
          '<p style="color: #f7931a; font-size: 13px; text-decoration: none;"><b><i class="fa-brands fa-bitcoin"></i> BITCOIN <br> <i style="color: black; font-size: 11px;">bc1qyevcm5ct2e238fdc44jau46galpq6xxd5xdxuj</i></b></p>' +
          '<p style="color: #a05cff; font-size: 13px; text-decoration: none;"><b><i class="fa-brands fa-ethereum"></i> ETHEREUM <br> <i style="color: black; font-size: 11px;">0x7e31dF204247A3b9661D109783218e231959a1E4</i></b></p>' +
          '<p style="color: #2a71d0; font-size: 13px; text-decoration: none;"><b><i class="fa-solid fa-coins"></i> CARDANO <br> <i style="color: black; font-size: 11px;">addr1qxy49lgx9mnqts0f3kwxm2ltr3qfuxngh49pk5kacqhx7sdg4gch48g35fap6a4y3fup3pzjam06yukhnzatdlktghdq9unjew</i></b></p>' +
          '<p style="color: black; font-size: 12px;"><b>Thank you! <i class="fa-regular fa-face-smile-beam"></i></b></p>',
        showCloseButton: false,
        showCancelButton: false,
        background: '#ececec',
        confirmButtonColor: "#ffffff",
        confirmButtonText:
          'Close',
        confirmButtonAriaLabel: 'Close',
      })
}