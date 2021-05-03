/* --------------------------- GENERAL */

// Scroll to top on load
// https://stackoverflow.com/questions/40481874/scroll-to-top-on-page-load-html

$(window).on("beforeunload", function() {
  $("body").hide();
  $(window).scrollTop(0);
});

/* Hero section fade on scroll - https://stackoverflow.com/questions/51118337/how-do-i-make-an-image-fade-out-but-stay-in-place-on-scroll/ */

$(window).scroll(function() {
  $("#hero-image").css("opacity", 1.0 - $(window).scrollTop() / 300);
});

/* --------------------------- RACE SELECTOR */

// Adapted from https://www.w3schools.com/howto/howto_js_cascading_dropdown.asp

$(document).ready(function() {

  var regions = {
    "Europe": ["Ultra-Trail du Mont-Blanc (UTMB)", "Eiger Ultra Trail", "Spartathlon", "Ultra X 125 Azores", "Transylvania 100k", "Mozart 100", "Fire & Ice Ultra", "UTMR (Ultra Tour Monte Rosa)", "Tor des Géants"],
    "North America": ["Badwater 135", "Western States Endurance Run", "Hardrock 100", "Leadville Trail 100", "HURT100", "Barkley Marathons", "Grand to Grand"],
    "South America": ["Atacama Crossing", "The Jungle Ultra", "Ushuaia by UTMB", "Brazil135+ Ultramarathon", "Ultra Fiord", "Chicamocha Canyon Race"],
    "Africa": ["Marathon des Sables", "Comrades Marathon: The Ultimate Human Race", "Ultra-Trail Cape Town (UTCT)", "Grand Raid de la Réunion", "Transgrancanaria", "Salt Pans Ultra Marathon", "For Rangers"],
    "Asia & Australasia": ["Ultra-Trail Australia (UTA)", "Ultra X Sri Lanka", "Everest Trail Race", "Gaoligong by UTMB", "La Ultra – The High", "Ultra-Trail Mt. Fuji"],
    "Middle East": ["Ultra X Jordan"]
  };

  var regionSel = document.getElementById("region");
  var raceSel = document.getElementById("race");
  for (var a in regions) {
    regionSel.options[regionSel.options.length] = new Option(a, a);
  }
  regionSel.onchange = function() {
    //empty races
    raceSel.length = 1;
    //display correct values
    var b = regions[this.value];
    for (var i = 0; i < b.length; i++) {
      raceSel.options[raceSel.options.length] = new Option(b[i], b[i]);
    }
  };
});

/* --------------------------- RACE INFORMATION */

const races = [{
    name: "Ultra-Trail du Mont-Blanc (UTMB)",
    location: "France / Switzerland",
    distance: "171km",
    elevation: "10,300m",
    terrain: "Trail",
    difficulty: "Brutal",
    description: "This race takes place each year and starts and finishes in the French mountain resort of Chamonix and is one of the most difficult ultramarathons in the world. 2,500 runners compete in the event each year. The event takes plaace over 7 days and hosts four other events that range from a 50km ultra to a 350km team event. The races have strict entry and qualification requirements. If you want to participate you must accumulate enough race points to qualify, gained in other trail races over the previous two years to be entered into a ballot for a race entry.",
    website: "https://www.marathonmontblanc.fr/en/",
    lat: 45.91924995448426,
    lng: 6.865826926381162
  },
  {
    name: "Badwater 135",
    location: "US",
    distance: "217km",
    elevation: "4,450m",
    terrain: "Mixed",
    difficulty: "Brutal",
    description: "The start line at Badwater Basin in Death Valley is 85m below sea level and covering three mountain ranges climbing nearly 4,500m overall, up to the finish line on Mount Whitney. Runners travel through Furnace Creek, Devil’s Cornfield, Stovepipe Wells and Lone Pine, these are some of the hottest and driest locations in North America where temperatures often reach in excess of 40ºC, runners have been known to transport ice baths to checkpoints to cool down!",
    website: "https://www.badwater.com/",
    lat: 36.23131057832886,
    lng: -116.7660672234456
  },
  {
    name: "Eiger Ultra Trail",
    location: "Switzerland",
    distance: "101km",
    elevation: "6,700m",
    terrain: "Trail",
    difficulty: "Hard",
    description: "The race starts in the Swiss alpine town of Grindelwald and passes along mountain trails with epic scenery before traversing the base of the Eiger. This is an extremely tough race 101 km in length and with an elevation gain of 6,700m. This is a partially self-supported race but does have aid stations at which you can sample a variety of local foods. This event also offers two shorter races of 50km and 35km for those not wishing to tackle the full course.",
    website: "https://www.eigerultratrail.ch/en/",
    lat: 46.6248811225897,
    lng: 8.04065060801369
  },
  {
    name: "Ultra X Jordan",
    location: "Wadi Rum Desert, Jordan",
    distance: "250km (5 days)",
    elevation: "5,815m",
    terrain: "Desert",
    difficulty: "Intermediate",
    description: "Ultra X Jordan was previously the Wadi Rum Ultra and takes place in the magical “Valley of the Moon”. The desert course takes competitors past historic sites, into dramatic wadis and traverses massive sand dunes - think Lawrence of Arabia. Jordanian runner Salameh Al Aqra has beeen dominant since the event started winning all stages. Now that the event is more popular he will have more of a challenge from competitive ultra from runners around the world.",
    website: "https://ultra-x.co/jordan/",
    lat: 29.568430120523196,
    lng: 35.421942771293224
  },
  {
    name: "Ultra-Trail Australia (UTA)",
    location: "Australia",
    distance: "100km",
    elevation: "4,000m",
    terrain: "Trail",
    difficulty: "Intermediate",
    description: "A race in the beautiful Blue Mountains National Park in the state of New South Wales, this is an amazing 100km course. The Blue Mountains National Park is one of the most beautiful regions in Australia. The area is steeped in rich aboriginal history which you will see whilst out on the course and will also see plenty of wildlife.",
    website: "https://www.ultratrailaustralia.com.au/",
    lat: -33.72485458822233,
    lng: 150.2896891977
  },
  {
    name: "Comrades Marathon: The Ultimate Human Race",
    location: "South Africa",
    distance: "90km",
    elevation: "1,166m",
    terrain: "Road",
    difficulty: "Intermediate",
    description: "This is the world’s oldest and largest ultra marathon with an ethos of celebrating mankind's spirit over adversity. First run in 1921 with over 300,000 runners having completed the course since then. There is a strict 12-hour cut-off for this race so plan well to ensure you finish the 90km course in time. The race is run between Durban and Pietermaritzburg, with the direction alternating each year - an 87km west to east uphill course one year and a 90km east to west downhill the year after.",
    website: "https://www.comrades.com/",
    lat: -29.625436894920185,
    lng: 30.3911381446702
  },
  {
    name: "Marathon des Sables",
    location: "Morocco",
    distance: "251km (6 days)",
    elevation: "5,000m",
    terrain: "Desert",
    difficulty: "Intermediate",
    description: "In 1984, Patrick Bauer a French concert promoter crossed a part of the Sahara Desert from Morocco on foot, alone, and carrying everything he needed on his back. Bauer was so profoundly impacted by his journey that he decided to start a race so that others could experience what he had. More than 13,000 runners have now completed the course enduring temperatures of up to 48 degrees centigrade. This is a fully self supported race in which competitors have to carry everything they need for the week long race. An amazing challenge.",
    website: "https://ultra-x.co/jordan/",
    lat: 29.568430120523196,
    lng: 35.421942771293224
  },
  {
    name: "Western States Endurance Run",
    location: "Squaw Valley, California",
    distance: "161km",
    elevation: "5,500m",
    terrain: "Trail",
    difficulty: "Hard",
    description: "This 100 mile trail race was originally competed on horseback, until Gordy Ainsleigh attempted to complete the course on foot in under 24 hours. He proved it was possible and since his run thousands of other have travelled from all over the world to compete in this race. The cut off time is 30 hours to complete the route and the range in elevation means some miles are run on snow and others on scorching hot trails. This is a stunning race between Squaw Valley and Auburn which takes in the beauty of Emigrant Pass and the canyons of the California gold country.",
    website: "https://www.wser.org/",
    lat: 39.19828932217277,
    lng: -120.22945680959677
  },
  {
    name: "Spartathlon",
    location: "Greece",
    distance: "246km",
    elevation: "6,543m",
    terrain: "Road",
    difficulty: "Brutal",
    description: "Spartathlon relives the story of Pheidippides, an ancient Athenian long distance runner who, in 490 BC (before the battle of Marathon), was sent to Sparta from Athens to seek help in the war between the Greeks and the Persians. According to the ancient Greek historian Herodotus, Pheidippides arrived in Sparta the day after his departure from Athens. The event was founded in 1984 and attracts runners from around the globe. The race is demanding because of the distance and also due to the cut-off requirements and weather conditions. Each of the 75 race check points has its own cut-off. Should a runner arrive later than the official closing time he or she will be eliminated from the race.",
    website: "https://www.spartathlon.gr/en/",
    lat: 37.97116015942636,
    lng: 23.726478760806234
  },
  {
    name: "Hardrock 100",
    location: "Silverton, Colorado",
    distance: "161km",
    elevation: "10,074",
    terrain: "Mountains",
    difficulty: "Hard",
    description: "Hardrock 100 is a looped course of dirt trails and cross country running along the San Juan Range of the Rocky Mountains. With an elevation gain of more than 10,000m and 13 high points above 3,700m, it is a difficult race. The terrain is extremely rugged with steep scree climbing and descending, snow, river crossings and boulder fields. The average finish time is 40 hours and to complete the course, runners must kiss the infamous ‘Hardrock’ at the end. Designed to provide extreme challenges in altitude, steepness, and remoteness - mountaineering, wilderness survival and navigation skills are as important in this event as endurance.",
    website: "https://hardrock100.com/",
    lat: 37.81455666839844,
    lng: -107.66095105522486
  },
  {
    name: "Atacama Crossing",
    location: "Chile",
    distance: "250km (7 days)",
    elevation: "1,683m",
    terrain: "Desert",
    difficulty: "Hard",
    description: "This race takes competitors across the Atacama Desert in Chile, the driest place on earth. The route combines rough terrain an a harsh climate. Temperatures often reach 40°C and the average altitude is 2,500m. It is a self-supported race with competitors required to carry everything they need for the seven day event. Racers travel through canyons and valleys, along ancient Incan roads, through small villages, over sand dunes, salt flats and rivers, all surrounded by a range of stunning volcanoes.",
    website: "https://www.racingtheplanet.com/atacamacrossing",
    lat: -22.641471247821155,
    lng: -68.23951322441216
  },
  {
    name: "Ultra X 125 Azores",
    location: "São Miguel, Azores (Portugal)",
    distance: "125km (2 days)",
    elevation: "5,8oom",
    terrain: "Trail",
    difficulty: "Hard",
    description: "Ultra X 125 Azores is run on one of nine islands in the Azores. The route passes along trails past volcanoes, through green valleys and past stunning lagoons. The start of the race is under Ponta Delgada’s main city gates at 5am on Saturday morning and runners head out of the city into the hills. Saturday night is spent at a seaside campsite and Sunday is the marathon stage before the finisher's BBQ and prize giving.",
    website: "https://ultra-x.co/azores-125/",
    lat: 37.78405321344546,
    lng: -25.46215372290702
  },
  {
    name: "Ultra-Trail Mt. Fuji",
    location: "Japan",
    distance: "165km",
    elevation: "7,500m",
    terrain: "Mountains",
    difficulty: "Hard",
    description: "The Ultra-Trail Mt. Fuji starts out at Ohike Kouen, and race covers the entire circumference of Mt. Fuji and is run through undulating mountain trails, local footpaths and forest roads. In order to complete the race, runners head anti clockwise into Kawaguchiko, Fujikawaguchiko-cho, and then into Yamanashi Prefecture. This is not a race for the less experienced ultra runner!",
    website: "https://www.ultratrailmtfuji.com/en/",
    lat: 35.25476823897006,
    lng: 138.77502779776023
  },
  {
    name: "Ultra X Sri Lanka",
    location: "Sri Lanka",
    distance: "250km (5 days)",
    elevation: "687m",
    terrain: "Trail",
    difficulty: "Intermediate",
    description: "The Ultra X Sri Lanka is a five day multi stage ultra marathon and the only event of its type. It takes runners through tea plantations, ancient rainforests and down rushing rivers. During the week competitors will get to experience the people, the beauty of this iconic country that is steeped in a rich history.",
    website: "https://ultra-x.co/sri-lanka/",
    lat: 6.440416108573715,
    lng: 80.8898559602463
  },
  {
    name: "Everest Trail Race",
    location: "Nepal",
    distance: "160km",
    elevation: "28,000m",
    terrain: "Mountains",
    difficulty: "Hard",
    description: "The Everest Trail Race ranks as one of the most unique multi-stage ultras in the world. It is a partially supported multi stage ultra marathon, with an altitude change of more than 28,000m. Runners carry their clothing and sleeping bag over the course with the race organisation providing food, accommodation and logistical support. This is an expensivce race to enter at £2,750 excluding flights.",
    website: "https://everesttrailrace.co.uk/",
    lat: 27.897826077486098,
    lng: 86.77899949092938
  },
  {
    name: "Gaoligong by UTMB",
    location: "China",
    distance: "165km",
    elevation: "9,500m",
    terrain: "Mountains",
    difficulty: "Hard",
    description: "Gaoligong by UTMB is run around one of most famous Taoist mountains in China in the Sichuan province and the gateway to Tibet. Finishing the 100 mile distance gives runners a guaranteed entry to the coveted UTMB.",
    website: "https://utmbmontblanc.com/en/mag/177/",
    lat: 24.895611654987476,
    lng: 101.41101612057562
  },
  {
    name: "La Ultra – The High",
    location: "India",
    distance: "111km, 222km and 333km",
    elevation: "26,670m",
    terrain: "Mountains",
    difficulty: "Brutal",
    description: "This multi stage ultra marathon takes place on the Great Himalayan range of India and is possibly be the most brutal in the world. Most of the run is done with 50% less oxygen than at sea level, temperatures can vary from from -12 to 40°C and the highest point in the race is 5,359m above sea level. The race is non-stop with three categories of 111km, 222km and 333km.",
    website: "https://www.laultra.in/",
    lat: 34.68560707643709,
    lng: 77.56951945508497
  },
  {
    name: "Ultra-Trail Cape Town (UTCT)",
    location: "South Africa",
    distance: "100km",
    elevation: "4,300m",
    terrain: "Trail",
    difficulty: "Hard",
    description: "This route shows the very best of Cape Town and includes traversing sections of Table Mountain, Lion’s Head, Signal Hill, Orangekloof, Llandudno and Devils Peak. There is a tight cut off time of 17 hours for the 100km event. There are four race options from half marathon to 100km, so there is something for every level of runner.",
    website: "https://www.ultratrailcapetown.com/",
    lat: -33.99856173756557,
    lng: 18.52682304879638
  },
  {
    name: "Transgrancanaria",
    location: "Gran Canaria",
    distance: "128km",
    elevation: "7,500m",
    terrain: "Trail",
    difficulty: "Intermediate",
    description: "‘Transgran’ crosses the island of Gran Canaria from North to South and from coast to coast. The race includes a beach start at 11pm on the Friday night. The race started in 2003 with just 65 participants but over the years it has grown to more than 3,000 participants from more than 70 countries.",
    website: "https://www.transgrancanaria.net/en/",
    lat: 28.1430109121253,
    lng: -15.433183894674064
  },
  {
    name: "Grand Raid de la Réunion",
    location: "Reunion Island",
    distance: "162km",
    elevation: "9,643m",
    terrain: "Trail",
    difficulty: "Hard",
    description: "Also called La Diagonale des Fous (The Madmen Diagonal) is a mountain ultramarathon on Réunion Island, situated between Madagascar and Mauritius. The 162km route has 9,643m of elevation and is incredibly difficult and is considered one of the hardest races in the world. Runners will pass by volcanoes, waterfalls, lush green forests and tropical beaches and weather conditions offering an amazing and challenging experience.",
    website: "https://www.grandraid-reunion.com/english/",
    lat: -21.128707379080893,
    lng: 55.49155821596959
  },
  {
    name: "Salt Pans Ultra Marathon",
    location: "Botswana",
    distance: "100km (3 days)",
    elevation: "1,000m",
    terrain: "Salt Pans",
    difficulty: "Beginner / Intermediate",
    description: "The Salt Pans Ultra Trail Marathon is a 3-day trail run on the Makgadikgadi Salt Pans in Botswana, costing just £320. The pans are beautiful, however, the harsh environment will make race conditions unpredictable. Rains may make the pans muddy and wet, yet hot winds could whip up sand making for slow progress. The glare of the pan’s snow white sand in the midday sun can also be a headache-inducing. Runners must be prepared for anything!",
    website: "https://www.saltpansultra.com/",
    lat: -20.888589251981728,
    lng: 25.807206335046203
  },
  {
    name: "For Rangers",
    location: "Kenya",
    distance: "230km (6 days)",
    elevation: "2,000m",
    terrain: "Desert",
    difficulty: "Intermediate",
    description: "For Rangers supports the park rangers that protect Africa’s remaining giants. This is a multi-stage race over 5 stages and covers 230km across five wildlife conservation areas. The profits from the race go entirely towards supporting the 2,500 rangers in the area. This is a self-sufficient race with competitors responsible for carrying their entire kit, food, safety equipment and a minimum 2.5 litres of water.",
    website: "https://www.forrangers.com/",
    lat: -1.4589891399784842,
    lng: 36.72916710925406
  },
  {
    name: "Leadville Trail 100",
    location: "Leadville, Colorado",
    distance: "161km",
    elevation: "4,800m",
    terrain: "Trail",
    difficulty: "Hard",
    description: "The Leadville Trail 100 follows the Colorado Trail and is a gruelling out-and-back route. The route combines technical terrain with long and steep climbs, the most challenging of which is the ascent of the 3,740m high Hope Pass. This race starts at 3,100m above sea level, with the elevation continuing up from there. Runners often battle symptoms of hypoxia, hyponatremia and hypothermia during this extremely challenging race.",
    website: "https://www.leadvilleraceseries.com/run/leadvilletrail100run/",
    lat: 39.24804046161333,
    lng: -106.29690703101502
  },
  {
    name: "HURT100",
    location: "HO’ahu, Hawaii",
    distance: "161km",
    elevation: "7,468m",
    terrain: "Trail",
    difficulty: "Hard",
    description: "The HURT Trail 100-Mile Endurance Run (HURT 100) is a very difficult race only for the adventurous and well prepared ultrarunner. It is run on trails located in the mountains above the city of Honolulu. The race is famous for its extremely challenging terrain and for a incredibly scenic course, with stunning views of the O‘ahu coastline and the Pacific Ocean.",
    website: "https://hurt100.com/",
    lat: 21.330534236567033,
    lng: -157.88560073682214
  },
  {
    name: "Barkley Marathons",
    location: "Frozen Head State Park, Tennessee",
    distance: "160km",
    elevation: "36,600m",
    terrain: "Mountains",
    difficulty: "Brutal",
    description: "The Barkley Marathon is a now legendary race and was brought to public attention by a Netflix documentary - The Race That Eats Its Young. The course is officially 20 miles but it is generally considered to be closer to a marathon in length. To finish the event runners must complete all five loops in under 60 hours. With a total elevation gain of 36,600m this is a very difficult and gruelling race. The race start is signalled by blowing a conch shell in the middle of the night giving the runners 1 hour notice. Competitors are required to collect pages from books hidden around the course to prove that they have completed each loop of the race.",
    website: "No website",
    lat: 36.12701289587364,
    lng: -84.42118938506238
  },
  {
    name: "Grand to Grand",
    location: "Grand Canyon, Arizona",
    distance: "275km (7 days)",
    elevation: "5,499m",
    terrain: "Trail",
    difficulty: "Intermediate",
    description: "The Grand to Grand is a multi stage race starting from north rim of the Grand Canyon, and traversing a high desert landscape of sand dunes, canyons, buttes, mesas and hoodoos. Each day of the race is approximately marathon distance with a long 85km stage in the middle. The race is expensive to enter at $3,550 but competitors will enjoy amazing views, ancient geological rock formations and isolated canyons that few people will have ever seen.",
    website: "https://g2gultra.com/",
    lat: 36.209288564527995,
    lng: -112.06013155254627
  },
  {
    name: "Transylvania 100k",
    location: "Romania",
    distance: "100km",
    elevation: "5,000m",
    terrain: "Trail",
    difficulty: "Hard",
    description: "This mountain ultra is run in one of the most beautiful regions of Eastern Europe. Runners will experience twisting single track paths, ancient forest trails, mountains and windswept ridges as they run through the Bucegi Range, ascending and descending thousands of metres before a returning to the Bran Castle for the finish. Bran Castle is the Transylvanian home of Dracula.",
    website: "https://www.transylvania100k.com/",
    lat: 45.51442104915137,
    lng: 25.36883739832018
  },
  {
    name: "Mozart 100",
    location: "Austria",
    distance: "108km",
    elevation: "5,000m",
    terrain: "Trail",
    difficulty: "Hard",
    description: "The Mozart 100 is a race for those looking for value for money and to experience the beautiful scenery made famous in the film The Sound of Music. The race starts and finishes in Kapitelplatz Square. There are multiple race distances included in this event with the Mozart Marathon, the Mozart Light and the Mozart Half Marathon as options for those that do not wish to run the full 108km distance. This is a great race for those runners looking for a challenge that is slightly less demanding than some of the other ultra races.",
    website: "https://www.mozart100.com/en/",
    lat: 47.771922261894936,
    lng: 13.355654859237529
  },
  {
    name: "Fire & Ice Ultra",
    location: "Iceland",
    distance: "250km (6 days)",
    elevation: "“Not too much” (as stated on the race website)",
    terrain: "Trail",
    difficulty: "Intermediate",
    description: "This race is a 6 stage event with each stage offering a different distance with the longest stage at 70km. Between stages the runners sleep in tents provided by the race organisers. The race passes by lava fields, ash covered mountains and the most powerful waterfall in the Northern Hemisphere. Being a multi-stage race this is a great adventure and those that enter are guaranteed an amazing experience.",
    website: "https://www.extremeadventureraces.com/info/fireandiceultrarace/",
    lat: 64.78382483510778,
    lng: -17.206232472116614
  },
  {
    name: "UTMR (Ultra Tour Monte Rosa)",
    location: "Switzerland & Italy",
    distance: "170km",
    elevation: "11,300m",
    terrain: "Trail",
    difficulty: "Brutal",
    description: "The Monte Rosa massif has 10 summits over 4,000m and is situated on the border between Switzerland and Italy. The race route follows the trails of the Tour de Monte Rosa and takes runners on an incredible adventure. There are 3 race options, the single stage UTMR, a 4 day stage race which splits the course into four 30-50km days and a 100km ultra which although 70km shorter than the full race distance this event still has 6,420m of elevation gain.",
    website: "https://www.ultratourmonterosa.com/",
    lat: 45.93684614020497,
    lng: 7.870457591860179
  },
  {
    name: "Tor des Géants",
    location: "Italy",
    distance: "330km",
    elevation: "24,000m",
    terrain: "Trail",
    difficulty: "Brutal",
    description: "The Tor des Géants route passes along spectacular alpine trails through the Gran Paradiso National and Mont Avic Regional Parks. The race starts and finishes in Courmayeur, Italy, competitors attempt to cover the 330km ahead of a cut-off time of 150 hours. Recently the race organisers have introduced the TOR450 to mark the 10th anniversary of the race. This is a 450km race which has over 32,000m of elevation.",
    website: "https://www.tordesgeants.it/en/content/tor-des-g%C3%A9ants%C2%AE",
    lat: 45.79573652293625,
    lng: 6.974106667702274
  },
  {
    name: "The Jungle Ultra",
    location: "Peru",
    distance: "230km (5 days)",
    elevation: "n/a",
    terrain: "Jungle",
    difficulty: "Hard",
    description: "This 230km race is split over 5 stages of suffocating jungle, river crossings and cloud covered mountain valleys. Over the week long event unners will traverse the Amazon Rainforest in the Manu National Park running from the Andes mountains to the Madre de Dios River. This race is not for beginners with competitors tackling thick undergrowth, deep mud, and river crossings. Competitors must be self-sufficient and carry all supplies necessary to complete the event.",
    website: "https://beyondtheultimate.co.uk/ultra/jungle-ultra/#!/2021",
    lat: -12.042496026423258,
    lng: -71.72307911534153
  },
  {
    name: "Ushuaia by UTMB",
    location: "Argentina",
    distance: "130km",
    elevation: "7,100m",
    terrain: "Mixed",
    difficulty: "Hard",
    description: "Ushuaia is seriously tough! There are four distances on offer (35km, 50km, 70km and 130km), combining forests, rocky trails, mountains, hills, glaciers, lakes, rivers, and wetlands. The race begins and ends in Ushuaia, and competitors cross eight mountain passages that connect the southern Andes which, due to their proximity to Antarctica, exhibit a similar climate to the Alps, averaging around 2,500-3,000m altitude.",
    website: "https://utmbmontblanc.com/en/mag/101/",
    lat: -54.79872955158618,
    lng: -68.31413462470238
  },
  {
    name: "Brazil135+ Ultramarathon",
    location: "Brazil",
    distance: "217km",
    elevation: "9,000m",
    terrain: "Mixed",
    difficulty: "Brutal",
    description: "The Brazil135+ Ultramarathon is considered the most difficult footrace in the country and is run on the hardest, most challenging segment of the Caminho da Fé (Path of Faith). The course consists of a combination of dirt roads, forest, waterfalls, asphalt, trails and railroad tracks. It remains a small event with entry limited to around 70 runners, many of whom are there to complete the solo event in under 48 hours.",
    website: "http://www.brazil135.com.br/",
    lat: -21.97599949357952,
    lng: -46.78946941010511
  },
  {
    name: "Ultra Fiord",
    location: "Chile",
    distance: "136km (2 days)",
    elevation: "7,189m",
    terrain: "Trail",
    difficulty: "Hard",
    description: "Ultra Fiord is a trail running event that takes place in the extreme southern end of Chilean Patagonia. There are mutiple distances on offer from the 21km single stage event to the 136km multi-stage race. The race passes through the mountains of the Torres del Paine National Park takes in long, narrow glacial inlets, mountain passes, rivers, peat bogs, rocks, and glacier crossings. The weather during this event is reknowned for being unpredictable so competitors need to need to be well prepared.",
    website: "https://www.ultrafiord.com/mobile-home/",
    lat: -50.94121750338105,
    lng: -73.4058866778276
  },
  {
    name: "Chicamocha Canyon Race",
    location: "Colombia",
    distance: "160km",
    elevation: "7,629m",
    terrain: "Trail",
    difficulty: "Hard",
    description: "The Chicamocha Canyon Race was the first internationally recognised trail running event to take place in Colombia and now attracts more than 800 competitors from around the world. There are two race options, 100km or a 100mile route. Runners head north from San Gil, Santander, the route combining forest, gorges and arid landscapes. This race is run on trails with technical ascents and descents and temperatures can soar during the event.",
    website: "https://chicamochacanyonrace.com/",
    lat: 6.557417843343337,
    lng: -73.13775240538115
  },
];

$("#race").change(function() {

  let selRace = document.getElementById("race").value;

  let race = races.find(race => race.name === selRace);

  raceLocation(race.lat, race.lng, race.name);


// Add race information to race information section
  $("#race-information").empty().append(
    `<h2 class="race-information">${race.name}</h2>
        <p>${race.description}</p>
          <table id="table">
          <tr>
              <td id="table-category">Location:</td>
              <td id="table-category-data">${race.location}</td>
          </tr>
          <tr>
              <td id="table-category">Distance:</td>
              <td id="table-category-data">${race.distance}</td>
          </tr>
          <tr>
              <td id="table-category">Elevation:</td>
              <td id="table-category-data">${race.elevation}</td>
          </tr>
          <tr>
              <td id="table-category">Terrain:</td>
              <td id="table-category-data">${race.terrain}</td>
          </tr>
          <tr>
              <td id="table-category">Difficulty:</td>
              <td id="table-category-data">${race.difficulty}</td>
          </tr>
          <tr>
              <td id="table-category">Website:</td>
              <td id="table-category-data"><a href="${race.website}" target="_blank">WEBSITE</a></td>
          </tr>
      </table>`
  );
});

/* --------------------------- NEWSLETTER */

// Clear form when submitted / closed

$("#newsletter-form").on("hidden.bs.modal", function() {
  $(this).find("newsletter-form").trigger("reset");
})

// form submission