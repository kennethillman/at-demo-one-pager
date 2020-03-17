

const scrapedin = require('scrapedin')
const fse = require('fs-extra')
const dotenv = require('dotenv')
dotenv.config()


const getScrapedIn = async function() {

    const profileScraper = await scrapedin({ email: 'kenneth.illman@gmail.com', password: '!knurra80'const profile = await profileScraper('https://www.linkedin.com/in/kennethillman/') })
	const profile = await profileScraper('https://www.linkedin.com/in/kennethillman/')
	
	// NO SUPPORT FOR COMPANY! :(
	// const company = await profileScraper('https://www.linkedin.com/company/higear-transformation/')

	console.log('linkedIn -> ' , profile);

	fse.outputJSON('./tweets/linkedin.json', profile)

	return { profile }
}

export default function NuxtLinkedIn(config) {
	this.nuxt.hook('build:before', generator => {
		getScrapedIn()
	})
}