const display=document.querySelector("p"),
display1 = document.getElementById("text1"),
display2 = document.getElementById("text2"),
display3 = document.getElementById("text3"),
display4 = document.getElementById("text4"),
 button=document.querySelector("button"),
 copyBtn=document.querySelector("span.far"),
 copyActive=document.querySelector("span.fas");
//let chars ='あいうえお';
let chars = [
  
  {
    text1:`အိပ်ရာထသည်`,
  },
  {
    text1:`အိပ်သည်`,
  },
  {
    text1:`အလုပ်လုပ်သည်`,
  },
  {
    text1:`အနားယူသည်၊အားလပ်ရက်ယူသည်`,
  },
  {
    text1:`လေ့လာသည်၊ဆည်းပူးသည်။ကျက်မှတ်သည်`,
  },
  {
    text1:`ပြီးဆုံးသည်`,
  },
  {
    text1:`ကုန်တိုက်`,
  },
  {
    text1:`ဘဏ်`,
  },
  {
    text1:`စာတိုက်`,
  },
  {
    text1:`စာကြည့်တိုက်`,
  },
  {
    text1:`အနုပညာပြတိုက်`,
  },
  {
    text1:`ယခု`,
  },
  {
    text1:`-နာရီ`,
  },
  {
    text1:`-မိနစ်/ မိနစ်-`,
  },
  {
    text1:`ခွဲ၊တစ်ဝက်`,
  },
  {
    text1:`ဘယ်နှနာရီ`,
  },
  {
    text1:`ဘယ်နမိနစ်`,
  },
  {
    text1:`နံနက်ပိုင်း ( AM )`,
  },
  {
    text1:`မွန်းလွဲပိုင်း ( PM )`,
  },
  {
    text1:`နံနက်`,
  },
  {
    text1:`နေ့၊နေ့လယ်`,
  },
  {
    text1:`ည`,
  },
  {
    text1:`တစ်နေ့က`,
  },
  {
    text1:`မနေ့က`,
  },
  {
    text1:`ဒီနေ့`,
  },
  {
    text1:`မနက်ဖြန်၊မနက်ဖန်`,
  },
  {
    text1:`သန်ဘက်ခါ`,
  },
  {
    text1:`ဒီနေ့မနက်၊ဒီမနက်`,
  },
  {
    text1:`ဒီနေ့ည၊ဒီည`,
  },
  {
    text1:`အနားယူချိန်၊ အားလပ်ရက်၊နားရက်`,
  },
  {
    text1:`နေ့ခင်းနားချိန်`,
  },
  {
    text1:`စာမေးပွဲ`,
  },
  {
    text1:`အစည်းအဝေး (~をします: အစည်းအဝေး
      ကိုလုပ်သည်။ အစည်းဝေးကိုကျင်းပသည်။)`,
  },
  {
    text1:`ရုပ်ရှင်`,
  },
  {
    text1:`မနက်တိုင်း`,
  },
  {
    text1:`ညတိုင်း`,
  },
  {
    text1:`နေ့တိုင်း`,
  },
  {
    text1:`တနင်္လာနေ့`,
  },
  {
    text1:`အင်္ဂါနေ့`,
  },
  {
    text1:`ဗုဒ္ဓဟူးနေ့`,
  },
  {
    text1:`ကြာသပတေးနေ့`,
  },
  {
    text1:`သောကြာနေ့`,
  },
  {
    text1:`စနေနေ့`,
  },
  {
    text1:`တနင်္ဂနွေနေ့`,
  },
  {
    text1:`ဘယ်နေ့၊ ဘယ်ရက် (ရက်သတ္တပတ်မှရက် (နေ့)ကို
    ဆိုလိုသည်။)`,
  },
  {
    text1:`~မှ/~က`,
  },
  {
    text1:`~အထိ`,
  },
  {
    text1:`~နှင့်~(နာမ်အချင်းချင်းကိုချိတ်ဆက်ရာတွင်
      အသုံးပြုသည်။)`,
  },
  {
    text1:`မလွယ်ဘူးနော်။ ဒုက္ခပဲနော်။ (စာနာမှုကိုဖော်ပြရာ
      တွင်အသုံးပြုသည်။)`,
  },
  {
    text1:`နံပါတ်`,
  },
  {
    text1:`နံပါတ်ဘယ်လောက်`,
  },
  {
    text1:`အဲဒီဘက်`,
  },
  {
    text1:`နယူးယောက်`,
  },
  {
    text1:`ပီကင်း`,
  },
  {
    text1:`လော့စ်အိန်ဂျလိ`,
  },
  {
    text1:`လန်ဒန်`,
  },
];



















button.addEventListener('click', () => {
let randomPhrase=Math.floor(Math.random() * chars.length);
display.innerHTML = chars[randomPhrase].text1;
});

snowFall.snow(document.querySelector('.snow'), {
	minSize: 6,
	maxSize: 10,
	round: true,
	flakeCount: 30,
	flakeColor: 'white'
});





//  button.onclick=()=>{

// let randomPhrase=Math.floor(Math.random() * chars.length);
// display.value = chars[randomPhrase].text;
// display1.value = chars[randomPhrase].author;
// display2.value = chars[randomPhrase].text1;
// display3.value = chars[randomPhrase].text2;
// let randomPhrase1 =Math.floor(Math.random() * chars1.length);
// display1.value = chars1[randomPhrase].author;
   //
   // let i,
   // randomPassword="";
   // copyBtn.style.display = "block";
   // copyActive.style.display = "none";
   // for ( i = 0; i < 1; i++) {
   //   randomPassword = randomPassword + chars.charAt(
   //     Math.floor(Math.random() * chars.length)
   //   );
   // }

//  }
