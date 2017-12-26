const express = require('express')
const router = express.Router()

let contactList = [
    {id: 0, name: 'Natcha Pholviriyatham', email: '57160224@go.buu.ac.th', phone: '0957613036'},

    {id: 1, name: 'Kamonlak Pisannoppawong', email: '57160038@go.buu.ac.th', phone: '00863529353'},

    {id: 2, name: 'Puttipong Decho', email: '57160642@go.buu.ac.th', phone: '0898860450'},

    {id: 3, name: 'Kantapon Budda', email: '57160040@go.buu.ac.th', phone: '0895442170'},

    {id: 4, name: 'Techin Chaisomboon', email: '57160045@go.buu.ac.th', phone: '0909634913'},

    {id: 5, name: 'Kanyawee Boonkoomyoo', email: '57160619@go.buu.ac.th', phone: '0909128030'},

    {id: 6, name: 'Huiyu Likhitsombat', email: '57090440@go.buu.ac.th', phone: '0830564344'},

    {id: 7, name: 'Waraporn Wandee', email: '57160059@go.buu.ac.th', phone: '0931164118'},

    {id: 8, name: 'Nudee Eiei', email: '12345678@go.buu.ac.th', phone: '0123456789'},

    {id: 9, name: 'Mama Phong', email: '012345679@go.buu.ac.th', phone: '0123456789'},
    
    {id: 10, name: 'Neengai Papa', email: '012456789@go.buu.ac.th', phone: '0123456789'},

  ];

//Develop GET /contacts API to list all contacts
//Develop GET /contacts?name= API to search contact by name

  router.get('/contacts/',(req,res) =>{
    if(req.query.name){
        for(i=0;i<contactList.length;i++)
            if(contactList[i].name == req.query.name)
                res.json(contactList[i])
    }
    else{
        res.json(contactList)
    }
})

//Develop GET /contacts API to list all contacts
/*router.get('/contacts', (req, res) => {
    res.json(contactList)
})*/

//Develop GET /contact/:id API to get contact information
router.get('/contacts/:id', (req, res) => {
    let id = req.params.id
    res.json(contactList[id])
})

//Develop POST /contacts API to create new contact
router.post('/contacts', (req, res) => {
    let newContact = req.body
    newContact.id = contactList.length
    contactList.push(newContact)
    res.status(201).json(newContact)
})

//Develop PUT /contact/:id API to update contact information
router.put('/contacts/:id', (req, res) => {
    let contact = req.body
    let id = req.params.id
    contactList[id] = contact
    res.status(200).json()
})

//Develop DELETE /contacts/:id API to remove contact from list
router.delete('/contacts/:id', (req, res) => {
    let id = req.params.id
    contactList.splice(id, 1)
    res.status(204).json()
})



module.exports = router

