// Important Tricks o object

const myObject = {
    name: 'Javascript',
    since: 1234,
    sablon:'Maxpro' 
}

const keys = Object.keys(myObject)
console.log(keys) // Output : [ 'name', 'since', 'sablon' ]

const values = Object.values(myObject)
console.log(values) // Output : [ 'Javascript', 1234, 'Maxpro' ]

const bothValueAndKeys = Object.entries(myObject)
console.log(bothValueAndKeys) // Output : [ [ 'name', 'Javascript' ], [ 'since', 1234 ], [ 'sablon', 'Maxpro' ] ] 
