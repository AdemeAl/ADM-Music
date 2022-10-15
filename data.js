let songs = [
    {
        name: 'Surat Al-Muddathir',
        path: 'https://dl2.sura.pw/dl/reciter/2/32/074.mp3?h=sfSYUFlDMQm6nbhete9lsQ&expires=1665930967&dl=true',
        artist: 'Saad Al-Ghamdi',
        cover: 'https://imgs.search.brave.com/8zjbP1sfxzNOrQhNBel_NGjqO43GaRg0nLdi3i6d-Ik/rs:fit:632:225:1/g:ce/aHR0cHM6Ly90c2Uy/LmV4cGxpY2l0LmJp/bmcubmV0L3RoP2lk/PU9JUC5ObDU3V0ZW/SGppTWN3Zlp0bVA3/VV9BSGFGaiZwaWQ9/QXBp'
    },
    {
        name: 'Surat Al-Baqarah',
        path: 'https://dl2.sura.pw/dl/reciter/16/32/002.mp3?h=Nt87_hHL5_djvlIRaIFyag&expires=1665930832&dl=true',
        artist: 'Abdul Rahman Al Sudais',
        cover: 'https://imgs.search.brave.com/97CWS7SdMsuvqla6ZM2ae_1T3ljODVHrCm5fwV50HeM/rs:fit:844:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5K/clZONmU3NlpSNGFI/c0ZMMjV4eUlnSGFF/SyZwaWQ9QXBp'
    },
    {
        name: 'Surat Al-Muzzamil',
        path: 'https://dl2.sura.pw/dl/reciter/25/32/073.mp3?h=9dbij8qSOZ31tpjkG8D0Sg&expires=1665931134&dl=true',
        artist: 'Mishary Rashid Alafasy',
        cover: 'https://imgs.search.brave.com/xIFaxcjGqmAPyWJLF6h-ZG7lUY9nFtCU0dtqSD_52x8/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5O/Z3EydmUxOTBiNnZ1/ekMwckM1SUtRSGFI/YSZwaWQ9QXBp'
    },
    {
        name: 'Doja',
        path: 'http://www.Naijaclasic.com.ng/wp-content/uploads/2022/07/Central_Cee_-_Doja_Naijaclsic.com.ng.mp3',
        artist: 'Central Cee',
        cover: 'https://i1.sndcdn.com/artworks-NZYolrlL1qf2-0-t500x500.jpg'
    },
    {
        name: 'DIE',
        path: 'https://www.drczic.com/kas/cd9a23d5a96465cd1c601ab0d8ace210eba884c8?d=753',
        artist: 'Gazo',
        cover: 'https://i.ytimg.com/vi/AU_phScMDes/hqdefault.jpg'
    },
    {
        name: 'Fade Up',
        path: 'https://trendinghints.xyz/files/music/2022/06/Zeg-P-Fade-Up-Ft-Hamza-Sch_Trendinghints.com.mp3',
        artist: 'Zeg P, Hamza, SCH',
        cover: 'https://imgs.search.brave.com/UAcUNj6E-S1JrUqxgap7LJOevUNJiVykpDsJ4zqvJFQ/rs:fit:640:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9WUC5R/YW1ZM0YwS1FJNUZF/T3VranB4bHFnSGdG/byZwaWQ9QXBp'
    },
    {
        name: 'TOUT VA BIEN',
        path: 'https://www.drczic.com/kas/dfbfc9eb1e92edf14d40922c7a343a6d3983db50?d=750',
        artist: 'Alonzo, Ninho, Naps',
        cover: 'https://gidiland.com/wp-content/uploads/2022/05/images-1-2.jpeg'
    },
    {
        name: 'RAPPEL',
        path: 'https://www.drczic.com/kas/e9372ed89e40309fd1039133f4530549a2d64cec?d=733',
        artist: 'Gazo',
        cover: 'https://imgs.search.brave.com/gRH_U6vsilRi_QdUgCVVgvLyvfDCTcO3XbngOl_t_G4/rs:fit:844:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC53/MFdtV084aTBNczhw/ekh3MnpxNTJ3SGFF/SyZwaWQ9QXBp'
    },
    {
        name: 'Gasolina',
        path: 'https://www.drczic.com/kas/a65a15d35bf7c1f255a50d13e79d35433346057c?d=602',
        artist: 'Tiakola, Rsko',
        cover: 'https://imgs.search.brave.com/olMTsUd9Weu3wcdqISYmn0NisGXC5VoIbgssSz4D4oU/rs:fit:400:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5H/VHByRUQ4R1BzZDNE/RVV6S0ExYlZBR1FH/USZwaWQ9QXBp'
    },
    {
        name: 'Encore une fois maman',
        path: 'https://www.drczic.com/kas/P1219?d=1219',
        artist: 'MIG',
        cover: 'https://imgs.search.brave.com/4NqfSAVMt-4pL0Crbp663Esxc7pgoYLNFe7mFok5bZs/rs:fit:844:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5L/WkNFZXpvOWc0RnRW/NThwMGhSSGJBSGFF/SyZwaWQ9QXBp'
    },
    {
        name: 'Jefe',
        path: 'https://www.cjoint.com/doc/22_02/LBtoIdr22LS_ninho-jefe-clip-officiel.mp3',
        artist: 'Ninho',
        cover: 'https://imgs.search.brave.com/0qns8oGmopls7XN1wjULNpHlVuuHon0U3HXe62ZtkZs/rs:fit:1000:1000:1/g:ce/aHR0cHM6Ly9pbWFn/ZXMuZ2VuaXVzLmNv/bS9kMzU3ZmY2NzAx/Yzc3ZGI1ZmU1NjEz/OTQyODY0MThjYy4x/MDAweDEwMDB4MS5q/cGc'
    },
    {
        name: 'Habanna',
        path: 'https://www.drczic.com/kas/cb4ecff6356430094a045157291fa46afea310fa?d=989',
        artist: 'Fresh La Douille',
        cover: 'https://imgs.search.brave.com/KVIyA5LPDmWCEwHo23hA89N-WGZ6XygK3jpeo3LZ67Y/rs:fit:1000:1000:1/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vbHlyaWNz/ZmEuY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDIyLzA4L0Zy/ZXNoLUxhLURvdWls/bGUtSGFiYW5uYS1M/eXJpY3MuanBnP2Zp/dD0xMDAwJTJDMTAw/MCZzc2w9MQ'
    },
    {
        name: 'Selfie',
        path: 'https://www.drczic.com/kas/P1182?d=1182',
        artist: 'Werenoi feat maes',
        cover: 'https://imgs.search.brave.com/s-l9_wyGQrs8y9BGjWBA347CDa3LVjxwTVhWji-7fJI/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9nZW8t/bWVkaWEuYmVhdHNv/dXJjZS5jb20vaW1h/Z2Vfc2l6ZS8xNDAw/eDE0MDAvZC9hLzYv/ZGE2YjVlZWMtNzRl/ZS00MjNmLThmZmMt/MGNhMjI4MTIzZWU5/LmpwZw'
    }
]