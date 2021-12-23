import { IPost } from '../app/interfaces/IPost'
import * as moment from 'moment';

moment.locale('pt-br');

export let Posts: IPost[] = [
    {
        profile: {
          name: 'Maria',
          image: '../../../assets/images/users/maria.gif'
        },
        comment: 'Hoje quero compartilhar o meu setup! Depois de muito tempo pesquisando cada peça favorita, ele está pronto :)',
        created_at: moment("20211026", "YYYYMMDD").fromNow(),
        images: {
            image_one: '../../../assets/images/posts/setup.jpg',
            image_two: '../../../assets/images/posts/setup2.jpg',
            image_three: '../../../assets/images/posts/setup3.jpg'
        }
    },
    {
        profile: {
          name: 'Gabs_',
          image: '../../../assets/images/users/gabs.gif'
        },
        comment: 'Depois desse dia muito cansativo, vou assistir um filme com a família 🤩',
        created_at: moment("20211025", "YYYYMMDD").fromNow(),
        images: {
            image_one: '',
            image_two: '',
            image_three: ''
        }
    },
    {
        profile: {
          name: 'Ricardo Coding',
          image: '../../../assets/images/users/ricardo.png'
        },
        comment: 'Escutando um rock enquando programo',
        created_at: moment("20211025", "YYYYMMDD").fromNow(),
        images: {
            image_one: '../../../assets/images/posts/dog.gif',
            image_two: '../../../assets/images/k.jpg',
            image_three: '../../../assets/images/posts/code.gif'
        }
    },
    {
        profile: {
          name: 'Caio',
          image: '../../../assets/images/users/caio.gif'
        },
        comment: 'Quem pode me ajudar com um bug no meu CSS? 🤔',
        created_at: moment("20210925", "YYYYMMDD").fromNow(),
        images: {
            image_one: '',
            image_two: '',
            image_three: ''
        }
    },
    {
        profile: {
            name: 'doug_',
            image: '../../../assets/images/users/doug.jpg'
        },
        comment: 'Desenvolvi um clone do spotify com HTML, CSS e JS, espero que gostem >_<',
        created_at: moment("20210920", "YYYYMMDD").fromNow(),
        images: {
            image_one: '../../../assets/images/posts/clone.png',
            image_two: '../../../assets/images/posts/clone2.png',
            image_three: '../../../assets/images/posts/clone3.png'
        }
    },
    {
        profile: {
          name: 'Julia DEV',
          image: '../../../assets/images/users/julia.gif'
        },
        comment: 'Consegui meu emprego como DEV :)',
        created_at: moment("20210814", "YYYYMMDD").fromNow(),
        images: {
            image_one: '',
            image_two: '',
            image_three: ''
        }
    },
    {
        profile: {
          name: '<!--Luiz',
          image: '../../../assets/images/users/luiz.jpg'
        },
        comment: 'Hoje estou estudando sobre hacking! 👾',
        created_at: moment("20210809", "YYYYMMDD").fromNow(),
        images: {
            image_one: '../../../assets/images/terminal.gif',
            image_two: '../../../assets/images/hacking.gif',
            image_three: '../../../assets/images/k.jpg'
        }
    },
    {
        profile: {
          name: 'Ricardo',
          image: '../../../assets/images/users/ricardo.png'
        },
        comment: 'Quem topa jogar um sonic? 🎮🕹',
        created_at: moment("20210728", "YYYYMMDD").fromNow(),
        images: {
            image_one: '../../../assets/images/posts/sonic.gif',
            image_two: '',
            image_three: ''
        }
    },
    {
        profile: {
          name: 'Maria',
          image: '../../../assets/images/users/maria.gif'
        },
        comment: 'Estou amando utilizar essa nova rede social :D',
        created_at: moment("20210502", "YYYYMMDD").fromNow(),
        images: {
            image_one: '',
            image_two: '',
            image_three: ''
        }
    },
]