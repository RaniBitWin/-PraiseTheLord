const LinksSocialMedia = {
  github: 'RaniBitWin',
  youtube: 'channel/UCO0jnL7E5hjfr32JSzWrMfA',
  facebook: 'ranieler',
  instagram: 'raniboywin',
  twitter: 'RaniWin19398237'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      UserImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}
getGitHubProfileInfos()

function praiseHymns() {
  document.getElementById('praiseUrls').innerHTML =
    ' <a class="change" style="display: contents;" href="praise/ADeusDemosGloria.mp3">A Deus Demos Glória</a><br><br><a class="change" style="display: contents;"  href="praise/AoCoroDosAnjos.mp3"> Ao Coro dos Anjos</a><br><br><a class="change" style="display: contents;" href="praise/AoDeusDeAbraaoLouvai.mp3"> Ao Deus de Abraão Louvai </a> <br><br><a class="change" style="display: contents;" href="praise/LouvemosORei.mp3"> Louvemos o Rei</a> <br><br><a class="change" style="display: contents;" href="praise/LouvorAoTrinoDeus.mp3">Louvor ao Trino Deus</a> <br><br><a class="change" style="display: contents;"  href="praise/ODeusEternoReina.mp3">O Deus Eterno Reina</a> <br><br><a class="change" style="display: contents;" href="praise/OhAdoraiOSenhor.mp3">Ó, Adorai o Senhor</a> <br><br><a class="change" style="display: contents;"  href="praise/PorBelezasNaturais.mp3">Por Belezas Naturais</a><br><br><a class="change" style="display: contents;" href="praise/SublimeAmor.mp3">Sublime Amor</a> <br><br><a class="change" style="display: contents;" href="praise/VindePovoDoSenhor.mp3">Vinde, Povo do Senhor</a><br><br><a class="change" style="display: contents;" href="praise/VosCriaturasDoSenhor.mp3">Vós Criaturas do Senhor</a> '
}

function worshipHymns() {
  document.getElementById('worshipUrls').innerHTML =
    ' <a class="change" style="display: contents;" href="worship/ATiTodaAGloria.mp3">A Ti Toda a Glória</a><br><br><a class="change" style="display: contents;"  href="worship/ComoAgradecer.mp3">Como Agradecer</a><br><br><a class="change" style="display: contents;" href="worship/JubilososTeAdoramos.mp3">Jubilosos Te Adoramos</a><br><br><a class="change" style="display: contents;" href="worship/LouvamosTeOhDeus.mp3">Louvamos Te, Ó Deus</a> <br><br><a class="change" style="display: contents;" href="worship/NosTeAdoramos.mp3">Nós Te Adoramos</a><br><br><a class="change" style="display: contents;"  href="worship/OhDeusDeAmor.mp3">Ó Deus de Amor</a><br><br><a class="change" style="display: contents;" href="worship/QuaoGrandeEsTu.mp3">Quão Grande És Tu</a><br><br><a class="change" style="display: contents;"  href="worship/SantoSantoSanto.mp3">Santo! Santo! Santo!</a><br><br><a class="change" style="display: contents;" href="worship/SupremoCriador.mp3">Supremo Criador</a> <br><br><a class="change" style="display: contents;" href="worship/TalQualEstou.mp3">Tal Qual Estou</a>'
}

function clearWorship() {
  document.getElementById('praiseUrls').innerHTML = ''
  document.getElementById('praiseUrls').style.zIndex = 0
  document.getElementById('worshipUrls').style.zIndex = 1
}

function clearPraise() {
  document.getElementById('worshipUrls').innerHTML = ''
  document.getElementById('worshipUrls').style.zIndex = 0
  document.getElementById('praiseUrls').style.zIndex = 1
}
