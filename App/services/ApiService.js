import { timer } from 'rxjs' 
import { mapTo, tap } from 'rxjs/operators'

const config = {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "omgvamp-hearthstone-v1.p.rapidapi.com",
		"x-rapidapi-key": "cY7eDD0k9CmshTQwM4wVAtMiBb4Pp1cXOVljsnoUJLf0VdaqyN"
	}
}

const endpoints = {
	cards: 'https://omgvamp-hearthstone-v1.p.rapidapi.com/cards',
	search: name => `https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/search/${name}`
}

const cards = () => fetch(endpoints.cards, config)
	.then(res => res.json())

const search = name => fetch(endpoints.search(name), config)
	.then(res => res.json())

export default {
	cards,
	search
}
