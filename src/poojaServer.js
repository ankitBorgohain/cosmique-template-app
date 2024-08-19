const apiPoojaData = [
    {   
        "id"          : 1,
        "title"       : "Vaishno Devi Pooja",
        "occassion"   : "regular",
        "imgSrc"      : "https://4.bp.blogspot.com/-9Yl4uH0Wn2s/Txz_IdRIGgI/AAAAAAAAE34/HdfU78XOwCY/s1600/matavaishnodevi.jpg",
        "description" : "कार भी है जिसमें भक्त को शारीरिक रूप से उपस्थित होने की आवश्यकता नहीं होती। पूजन उसके नाम से किया जाता है और प्रसाद उसे डाक से भेजा जाता है। श्रेणी ए: 2100/- रुपये का पूजन, श्रद्धालु को शारीरिक रूप से उपस्थित होने की आवश्यकता नहीं है।",
        "location"    : "Katra, Jammu and Kashmir.",
        "transport"   : "Taxis are the most popular mode of transportation. To reach the Bhawan, you can either trek a 13 km distance from Katra"
    },
    {   
        "id"          : 2,
        "title"       : "Kedarnath Maha Pooja",
        "occassion"   : "regular",
        "imgSrc"      : "https://www.traveltoindia.org/images/temples-img/kedarnath-dham.jpg",
        "description" : "कार भी है जिसमें भक्त को शारीरिक रूप से उपस्थित होने की आवश्यकता नहीं होती। पूजन उसके नाम से किया जाता है और प्रसाद उसे डाक से भेजा जाता है। श्रेणी ए: 2100/- रुपये का पूजन, श्रद्धालु को शारीरिक रूप से उपस्थित होने की आवश्यकता नहीं है ।",
        "location"    : "Uttrakhand",
        "transport"   : "Trek or public transport available"
    },
    {   
        "id"          : 3,
        "title"       : "Chamundi Pooja",
        "occassion"   : "regular",
        "imgSrc"      : "https://pbs.twimg.com/media/GDskd5_XUAIPB1W?format=jpg&name=small",
        "description" : "कार भी है जिसमें भक्त को शारीरिक रूप से उपस्थित होने की आवश्यकता नहीं होती। पूजन उसके नाम से किया जाता है और प्रसाद उसे डाक से भेजा जाता है। श्रेणी ए: 2100/- रुपये का पूजन, श्रद्धालु को शारीरिक रूप से उपस्थित होने की आवश्यकता नहीं है। ",
        "location"    : "Chamundi Hills, Mysuru",
        "transport"   : "Taxis are the most popular mode of transportation."
    },
    {   
        "id"          : 4,
        "title"       : "Devi Pooja",
        "occassion"   : "regular",
        "imgSrc"      : "https://behindeverytemple.org/wp-content/uploads/2020/10/Untitled-Design-2020-10-03T104110.307.jpg",
        "description" : "कार भी है जिसमें भक्त को शारीरिक रूप से उपस्थित होने की आवश्यकता नहीं होती। पूजन उसके नाम से किया जाता है और प्रसाद उसे डाक से भेजा जाता है। श्रेणी ए: 2100/- रुपये का पूजन, श्रद्धालु को शारीरिक रूप से उपस्थित होने की आवश्यकता नहीं है। ",
        "location"    : "Maharashtra",
        "transport"   : "Taxis are the most popular mode of transportation"
    },
    {   
        "id"          : 5,
        "title"       : "Mahabaleshwar Temple Pooja",
        "occassion"   : "regular",
        "imgSrc"      : "https://media.istockphoto.com/id/1455253786/photo/mahabaleshwar-shiva-templethis-temple-is-built-in-hemadpanti-style-old-mahabaleshwar.jpg?s=612x612&w=0&k=20&c=YRzm5mBe_poGujR65vPS11PgLhsi1H3SDpEQvmCks0o=",
        "description" : "कार भी है जिसमें भक्त को शारीरिक रूप से उपस्थित होने की आवश्यकता नहीं होती। पूजन उसके नाम से किया जाता है और प्रसाद उसे डाक से भेजा जाता है। श्रेणी ए: 2100/- रुपये का पूजन, श्रद्धालु को शारीरिक रूप से उपस्थित होने की आवश्यकता नहीं है। ",
        "location"    : "Gokarna, Karnataka",
        "transport"   : "Bus are the most popular mode of transportation."
    },
    {   
        "id"          : 6,
        "title"       : "Maa Kamakhya Temple Pooja",
        "occassion"   : "regular",
        "imgSrc"      : "https://i.pinimg.com/736x/81/66/48/816648a7345b7a53fb9fed4a20c99e52.jpg",
        "description" : "कार भी है जिसमें भक्त को शारीरिक रूप से उपस्थित होने की आवश्यकता नहीं होती। पूजन उसके नाम से किया जाता है और प्रसाद उसे डाक से भेजा जाता है। श्रेणी ए: 2100/- रुपये का पूजन, श्रद्धालु को शारीरिक रूप से उपस्थित होने की आवश्यकता नहीं है। ",
        "location"    : "Guwahati, Assam",
        "transport"   : "Taxis are the most popular mode of transportation."
    },
    {   
        "id"          : 7,
        "title"       : "Shivdham Temple Pooja",
        "occassion"   : "regular",
        "imgSrc"      : "https://content3.jdmagicbox.com/comp/tinsukia/i2/9999px374.x374.180303235017.h9i2/catalogue/shiva-dham-at-road-tinsukia-tinsukia-temples-ff85ot676a.jpg",
        "description" : "कार भी है जिसमें भक्त को शारीरिक रूप से उपस्थित होने की आवश्यकता नहीं होती। पूजन उसके नाम से किया जाता है और प्रसाद उसे डाक से भेजा जाता है। श्रेणी ए: 2100/- रुपये का पूजन, श्रद्धालु को शारीरिक रूप से उपस्थित होने की आवश्यकता नहीं है। ",
        "location"    : "Tinsukia, Assam",
        "transport"   : "Taxis are the most popular mode of transportation."
    }
]

export default apiPoojaData;