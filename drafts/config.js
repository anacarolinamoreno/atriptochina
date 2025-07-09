var config = {
    style: 'mapbox://styles/anarina/cmcnji40o00fl01qv0vithjw9',
    // leave commented to use Mapbox Standard Style
    accessToken: 'pk.eyJ1IjoiYW5hcmluYSIsImEiOiJja290ODd6NmUwMTF2MnFwaWw5NTlrejlsIn0.nFlzBcmYeHXyufbKUXrT0g',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    insetOptions: {
        markerColor: 'orange'
    },
    insetPosition: 'bottom-right',
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'How far does the NYC subway go?',
    subtitle: 'Broken promises in the rotten apple',
    byline: 'By Ana Carolina Moreno',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'Meet New York City.',
            image: './assets/san-fran.jpeg',
            description: 'The Big Apple, the city so nice they named it twice.',
            location: {
                center: [-74.17264, 40.75172],
                zoom: 9.5,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Home of the best subway system in the world...',
            image: './assets/washington-dc.jpg',
            description: 'I dare you to disagree.',
            location: {
                center: [-74.17264, 40.75172],
                zoom: 9.5,
                pitch: 0,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                { 
                    layer: 'subways',
                    opacity: 1,
                    duration: 2000
                }

            ],
            onChapterExit: []
        },
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: 'The thing is, the NYC subway is great...',
            image: './assets/geneva.jpg',
            description: '...but only for some people, depending on where they live.',
            location: {
                center: [-74.17264, 40.75172],
                zoom: 9.5,
                pitch: 0,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                { 
                    layer: 'not15',
                    opacity: .4,
                    duration: 2000
                }
            ],
            onChapterExit: []
        },
        {
            id: 'fourth-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Take South Brooklyn, for example.',
            image: './assets/buenos-aires.jpg',
            description: 'I dare you get from the closest subway station to anywhere there in under 15 minutes.',
            location: {
                center: [-73.92631, 40.61616],
                zoom: 11,
                pitch: 0,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fifth-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Same thing for Eastern Queens',
            image: './assets/buenos-aires.jpg',
            description: "Unless you're on a bike or a CaretPosition, you'll probably take a while longer.",
            location: {
                center: [-73.79679, 40.72386],
                zoom: 11,
                pitch: 0,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
