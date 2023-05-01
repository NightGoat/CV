const cvState = {
    "ru": {
        name: "Асадуллин Наиль",
        job: "Разработчик мобильных приложений",
        place: "1991гр, Стокгольм, Швеция",
        sectionTitles: {
            projects: "Проекты",
            summary: "Summary",
            skills: "Навыки",
            workExp: "Места работы",
            education: "Образование",
            aboutMe: "Обо мне",
            certificates: "Сертификаты",
            technologies: "Владение технологиями:"
        },
        education: {
            geekbrains: {
                name: "GeekBrains",
                link: "https://gb.ru/",
                course: "Android разработчик",
                type: "Дополнительное образование"
            },
            itmo: {
                name: "Университет ИТМО",
                link: "https://itmo.ru/",
                course: "Компьютерных Технологий и Управления",
                type: "Магистр"
            }
        },
        workPlaces: {
            electrolux: {
                name: "Electrolux",
                link: "https://www.electroluxgroup.com/",
                position: "Mobile developer",
                description: "Разработка мультиплатформенного приложения для умных(IoT) устройств"
            },
            krit: {
                name: "Компания «КРИТ»",
                link: "https://krit.pro/",
                position: "Android разработчик / Руководитель группы проекта",
                description: [
                    `Разработка приложений для крупной торговой сети и горнодобывающих холдингов.`,
                    ` Разработка приложения для очков дополненной реальности.`,
                    `Руководство группой разработчиков и проведение code review.`
                ]
            },
            startup: {
                name: `Стартап по созданию системы волонтерского движения`,
                link: "https://github.com/orgs/volunteergbteam/",
                position: "Android разработчик",
                description: [`Совместная разработка системы волонтерского движения
                (Django Rest API сервер + мобильные приложения).
                Самостоятельно разработал android приложение.
                Работа велась в общем проекте на GitHub, досках
                Jira и Trello. Помог проработать дизайн сайта и
                приложения в Figma.`]
            },
            engineer: {
                name: `ООО "Глобальные системы", СВЧ-радиосистемы, ЛОМО`,
                position: "Инженер-конструктор",
                description: "Конструирование радиоэлектронной аппаратуры"
            }
        },
        petProjects: {
            secretBLog: {
                description: "Kotlin Multiplatform Mobile diary app. Visually it looks like messenger for faster use, and has main feature of hiding secret messages. KMM, Redux, Coroutines, Realm Kotlin, SwiftUi",
                link: "https://github.com/NightGoat/SecretBlog"
            },
            flickr: {
                description: "Kotlin multiplatform mobile app for Flickr. Kotlin, KMM, Coroutines, MVI, Ktor, Korim, Korio, Koin, Coil, Jetpack Compose, Flickr api",
                link: "https://github.com/NightGoat/KmmFlickr"
            },
            needDrummer: {
                description: "Андроид приложение для поиска музыкантов. Kotlin, Firebase, Coroutines, MVI, Hilt",
                link: "https://github.com/NightGoat/NeedDrummer"
            },
            kextensions: {
                description: "Библиотека котлин extensions",
                link: "https://github.com/NightGoat/KEXtensions-core"
            },
            androidKex: {
                description: "Библиотека котлин extensions для Android",
                link: "https://github.com/NightGoat/KEXtentions"
            },
            weather: {
                description: "Погодное android приложение api OpenWeatherMap.org. Kotlin, RetroFit2, MVVM, Dagger2, RxJava2",
                link: "https://github.com/NightGoat/WeatherAndroidApp",
                playStore: "(ссылка на GooglePlayStore)",
                playStoreLink: "https://play.google.com/store/apps/details?id=ru.nightgoat.weather"
            },
            timeSheet: {
                description: "Приложение-менеджер времени. Java/kotlin, MVVM, Room, RxJava2, Dagger2, Joda time ",
                link: "https://github.com/NightGoat/Timesheet",
                playStore: "(ссылка на GooglePlayStore)",
                playStoreLink: "https://play.google.com/store/apps/details?id=nightgoat.timesheet"
            },
            cv: {
                description: "Это резюме, написанное на html/CSS ",
                link: "https://github.com/NightGoat/NightGoat.github.io"
            },
        },
        summary: [
            "Сертифицированный разработчик Android с более чем 2-летним опытом.",
            "Создал более 10 приложений с нуля и умело поддерживал их до и после выпуска для пользователей.",
            "Умею использовать и создавать любые возможные мобильные архитектуры, шаблоны проектирования и последние технологии фреймворков.",
            "Был лидером команды через год работы, меня знают своей способностью создавать хорошие команды и профессионально проверять код."
        ],
        aboutText: `Я выбрал Android разработку, потому что всегда
        был заинтересован мобильными приложениями.
        Мне нравится как в таком компактном формате люди
        реализовывают интересные идеи и дизайн, стараюсь
        изучать последние изменения в разработке, слушаю
        Android dev подкаст, подписан на телеграм каналы.
        Работая в фирме со свободным графиком, мне
        показалось что было бы очень удобно иметь
        <a href="https://play.google.com/store/apps/details?id=nightgoat.timesheet">приложение</a>
        которое учитывало бы моё рабочее время,
        и решил сделать его сам. Поэтому я записался на курсы
        разработчика. Первые уроки на курсе были
        посвящены Java, и когда впервые я создал объекты,
        которые существовали и взаимодействовали сами по
        себе, понял насколько это интересно и захватывающе.
        Поэтому я посвятил все свое свободное время учебе,
        потому что хотел изучить все подробно, стараясь
        ничего не упустить.
        <br />
        Прошел курсы Android разработчика Geekbrains.
        Создал два приложения, которые используют
        самые современные технологии Android
        разработки (Dagger2, RxJava2, RetroFit и тд),
        и выложил их в Google Play Store.
        C 2012 по 2019 работал по специальности
        инженер-конструктор.
        <br />
        Занимался разработкой
        различных приложений для специализированных ТСД
        устройств, телефонов и очков дополненной реальности, IoT устройств.
        Руководил небольшой группой разработчиков,
        веду ежедневный code review. Проходил <a href="https://practicum.yandex.ru/profile/it-mentor/">курсы
          наставников</a>.
        Постоянно саморазвиваюсь, изучаю новые технологии.`
    },
    "en": {
        name: "Asadullin Nail",
        job: "Mobile developer",
        place: "1991, Stockholm, Sweden",
        geekbrainsCourse: "Android developer",
        sectionTitles: {
            projects: "Pet projects:",
            summary: "Summary",
            skills: "Skills",
            workExp: "Work experience",
            education: "Education",
            aboutMe: "About me",
            certificates: "Certificates",
            technologies: "Technologies:"
        },
        education: {
            geekbrains: {
                name: "GeekBrains",
                link: "https://geekbrains.ru/",
                course: "Android developer",
                type: "Certification"
            },
            itmo: {
                name: "ITMO University",
                link: "https://en.itmo.ru/en/",
                course: "School of Computer Technologies and Control",
                type: "Master of Engineering and Technology"
            }
        },
        workPlaces: {
            electrolux: {
                name: "Electrolux",
                link: "https://www.electroluxgroup.com/",
                position: "Mobile developer",
                description: "Work on multiplatform (Android/iOS) application for IoT appliances"
            },
            krit: {
                name: "Krit.pro",
                link: "https://krit.pro/en/",
                position: "Android developer / Teamlead",
                description: [
                    `Developed applications for big retail company: logistics,
                    trucking, sorting of goods, barcode scanning.`,
                    `Made full research and developed application for Google Glass
                    AR glasses, for using in retail purposes, that won the state
                    tender.`,
                    `Developed applications for large mining company that worked
                    in very difficult conditions (no internet in mines, bad light) using
                    last advanced android technologies such as Jetpack compose
                    with MVI architecture. Worked with NFC, camera scanning ML
                    services, voice recognition.`,
                    `Formed team of 10 developers and fully supported their work
                    with code reviews and dailies.`
                ]
            },
            startup: {
                name: `Startup to create a system of volunteer movement`,
                link: "https://github.com/orgs/volunteergbteam/",
                position: "Android developer",
                description: []
            },
            engineer: {
                name: `Global systems, SVCH Radiosystems, LOMO`,
                position: "Engineer",
                description: "Design of radio devices."
            }
        },
        petProjects: {
            secretBLog: {
                description: "Kotlin Multiplatform Mobile diary app. Visually it looks like messenger for faster use, and has main feature of hiding secret messages. KMM, Redux, Coroutines, Realm Kotlin, SwiftUi",
                link: "https://github.com/NightGoat/SecretBlog"
            },
            flickr: {
                description: "Kotlin multiplatform mobile app for Flickr. Kotlin, KMM, Coroutines, MVI, Ktor, Korim, Korio, Koin, Coil, Jetpack Compose, Flickr api",
                link: "https://github.com/NightGoat/KmmFlickr"
            },
            needDrummer: {
                description: "Android app for musicians to find each other. Kotlin, Firebase, Coroutines, MVI, Hilt",
                link: "https://github.com/NightGoat/NeedDrummer"
            },
            kextensions: {
                description: "Native Kotlin extensions library",
                link: "https://github.com/NightGoat/KEXtensions-core"
            },
            androidKex: {
                description: "Android Kotlin extensions library",
                link: "https://github.com/NightGoat/KEXtentions"
            },
            weather: {
                description: "Android weather application that uses api from OpenWeatherMap.org. Kotlin, RetroFit2, MVVM, Dagger2, RxJava2",
                link: "https://github.com/NightGoat/WeatherAndroidApp",
                playStore: "(GooglePlayStore link)",
                playStoreLink: "https://play.google.com/store/apps/details?id=ru.nightgoat.weather"
            },
            timeSheet: {
                description: "Work time tracker app. Java/kotlin, MVVM, Room, RxJava2, Dagger2, Joda time ",
                link: "https://github.com/NightGoat/Timesheet",
                playStore: "(GooglePlayStore link)",
                playStoreLink: "https://play.google.com/store/apps/details?id=nightgoat.timesheet"
            },
            cv: {
                description: "This CV in html/CSS ",
                link: "https://github.com/NightGoat/NightGoat.github.io"
            }
        },
        summary: [
            "Certified Android developer with over 2 years of experience.",
            "Built over 10+ applications from scratch, skillfully supported them before and after release to the users.",
            "Know how to use and build every possible mobile architectures, design patterns, last framework technologies.",
            "Team lead after one year of work, known for good team forming and professional code reviewing."
        ],
        aboutText: `<p>I decided to pursue a career in Android development due to my longstanding interest in mobile applications.
        The ability to implement creative ideas and designs in a compact format has always fascinated me, and I
        regularly install new apps on my smartphone to stay up-to-date on the latest developments in the field.</p>
      <p>Given the flexibility of my work schedule, I identified a need for an app that could track my hours and
        seamlessly integrate with my routine. It was then that I enrolled in a developer course to learn the skills
        required to build such an app. During the initial lessons of the course, I gained a strong foundation in Java
        programming. The experience of creating and manipulating objects that functioned autonomously was both
        captivating and enlightening, and I knew then that I had found my calling.</p>
      <p>Since completing my developer course, I have gained over 3 years of experience as a mobile developer. Over
        the years, I have expanded my skills to include proficiency in Kotlin, Swift, and Java, as well as expertise
        in modern architectures and design patterns. During this time, I have worked on a variety of projects ranging
        from simple utilities to complex applications with thousands of active users.</p>
      <p>As a result of my experience, I have developed a reputation as a leader who is dedicated to producing
        high-quality work. I take a very responsible approach to all aspects of development, from planning and design
        to testing and deployment. I am constantly striving to improve my skills and stay up-to-date on the latest
        industry trends, and I enjoy mentoring and supporting junior developers as they grow their own careers.</p>
      <p>Aside from my passion for programming, I also have a strong interest in exploring the great outdoors and
        traveling to new destinations. Hiking through the wilderness with a large backpack is my preferred method of
        relaxation and rejuvenation, providing a refreshing escape from the digital world.</p>
      <p>In addition to my love of nature, I also have a passion for music. I was previously an active member of a
        rock band where I played guitar, and through this experience, I had the opportunity to meet a diverse range of
        people from around the world. It was incredibly rewarding to know that my music provided comfort and support
        to others during challenging times. These hobbies allow me to recharge and return to my work with renewed
        energy and creativity.</p>`
    }
};

function switchLanguage(language) {
    const state = cvState[language];

    document.getElementById("name").textContent = state.name;
    document.getElementById("job").textContent = state.job;
    document.getElementById("place").textContent = state.place;
    document.getElementById("geekbrainsCourse").textContent = state.place;


    const sectionTitle = state.sectionTitles
    document.getElementById("projects").textContent = sectionTitle.projects;
    document.getElementById("summary").textContent = sectionTitle.summary;
    document.getElementById("skills").textContent = sectionTitle.skills;
    document.getElementById("workExp").textContent = sectionTitle.workExp;
    document.getElementById("education").textContent = sectionTitle.education;
    document.getElementById("aboutMe").textContent = sectionTitle.aboutMe;
    document.getElementById("certificates").textContent = sectionTitle.certificates;
    document.getElementById("technologies").textContent = sectionTitle.technologies;

    const petProjects = state.petProjects

    const secretBlog = document.getElementById("secretBlog")
    secretBlog.innerHTML = petProjects.secretBLog.description;
    secretBlog.href = petProjects.secretBLog.link

    const flickr = document.getElementById("flickr")
    flickr.innerHTML = petProjects.flickr.description;
    flickr.href = petProjects.flickr.link

    const needDrummer = document.getElementById("needDrummer")
    needDrummer.innerHTML = petProjects.needDrummer.description;
    needDrummer.href = petProjects.needDrummer.link;

    const kex = document.getElementById("kextensions");
    kex.innerHTML = petProjects.kextensions.description;
    kex.href = petProjects.kextensions.link;

    const androidKex = document.getElementById("androidKex")
    androidKex.innerHTML = petProjects.androidKex.description;
    androidKex.href = petProjects.androidKex.link

    const weather = document.getElementById("weather")
    weather.innerHTML = petProjects.weather.description;
    weather.href = petProjects.weather.link
    
    const weatherPlay = document.getElementById("weatherPlayLink")
    weatherPlay.innerHTML = petProjects.weather.playStore
    weatherPlay.href = petProjects.weather.playStoreLink

    const timeSheet = document.getElementById("timeSheet")
    timeSheet.innerHTML = petProjects.timeSheet.description;
    timeSheet.href = petProjects.timeSheet.link
    
    const timeSheetPlay = document.getElementById("timeSheetPlayLink")
    weatherPlay.innerHTML = petProjects.timeSheet.playStore
    weatherPlay.href = petProjects.timeSheet.playStoreLink

    const cv = document.getElementById("cv")
    cv.innerHTML = petProjects.cv.description
    cv.href = petProjects.cv.link

    const jobs = state.workPlaces

    const electrolux = document.getElementById("electrolux")
    electrolux.innerHTML = jobs.electrolux.name
    electrolux.href = jobs.electrolux.link

    const electroluxJob = document.getElementById("electroluxJob")
    electroluxJob.textContent = jobs.electrolux.position

    const electroluxDesc = document.getElementById("electroluxDesc")
    electroluxDesc.textContent = jobs.electrolux.description

    const kritTitle = document.getElementById("kritTitle")
    kritTitle.innerHTML = jobs.krit.name
    kritTitle.href = jobs.krit.link

    const kritJob = document.getElementById("kritJob")
    kritJob.textContent = jobs.krit.position

    const kritDesc = document.getElementById("kritDesc")
    kritDesc.innerHTML = ""
    const descItems = jobs.krit.description
    for (let i = 0; i < descItems.length; i++) {
        const listItem = document.createElement("li");
        listItem.textContent = descItems[i];
        kritDesc.appendChild(listItem);
    }

    const startupTitle = document.getElementById("startupTitle")
    startupTitle.innerHTML = jobs.startup.name
    startupTitle.href = jobs.startup.link

    const startupPosition = document.getElementById("startupPosition")
    startupPosition.textContent = jobs.startup.position

    const startupDesc = document.getElementById("startupDesc")
    startupDesc.innerHTML = jobs.startup.description

    const enginer = document.getElementById("enginer")
    enginer.textContent = jobs.engineer.name
    
    const enginerTitle = document.getElementById("enginerTitle")
    enginerTitle.textContent = jobs.engineer.position

    const engineerDesc = document.getElementById("engineerDesc")
    engineerDesc.textContent = jobs.engineer.description

    const education = state.education
    const geekbrainsName = document.getElementById("geekbrainsName")
    geekbrainsName.innerHTML = education.geekbrains.name
    geekbrainsName.href = education.geekbrains.link

    document.getElementById("geekbrainsCourse").textContent = education.geekbrains.course
    document.getElementById("geekbrainsType").textContent = education.geekbrains.type

    const itmoName = document.getElementById("itmoName")
    itmoName.innerHTML = education.itmo.name
    itmoName.href = education.itmo.link

    document.getElementById("itmoCourse").textContent = education.itmo.course
    document.getElementById("itmoType").textContent = education.itmo.type

    
    document.getElementById("aboutText").innerHTML = state.aboutText
}

// Event listener for the language selector
document.getElementById("lang-switch").addEventListener("change", function () {
    const language = document.getElementById("lang-switch").value;
    switchLanguage(language);
    createSummary();
});

function createSummary() {
    // Get a reference to the unordered list element
    const list = document.getElementById("summaryList");
    list.innerHTML = "";
    const language = document.getElementById("lang-switch").value;

    // Create an array of items to add to the list
    const languageItems = cvState[language].summary;

    // Loop through the array and create a list item for each item
    for (let i = 0; i < languageItems.length; i++) {
        // Create a list item element
        const listItem = document.createElement("li");

        // Set the text content of the list item
        listItem.textContent = languageItems[i];

        // Add the list item to the unordered list
        list.appendChild(listItem);
    }
}

switchLanguage("en");
createSummary()