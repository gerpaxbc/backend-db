const express = require('express')
const { v4: uuidv4 } = require('uuid')
const router = express.Router()
const db = require('./db')

router.get('/', async (req, res) => {
  const snapshot = await db.collection('messages').get()
  const data = []

  snapshot.forEach((doc) => {
    console.log(doc.id, '=>', doc.data())
    const docData = doc.data()
    data.push({
      ...docData, 
    })
  })
  res.send({
    data
  })
})

router.post('/', async (req, res) => {
  const { dservice, dnumber, ddate, dtime, dnameasistant, dmobile, demail, dcomments, dstatus } = req.body
  const id = uuidv4()
  const docRef = db.collection('messages').doc(id)
  const message = {
    id,
    dservice,
    dnumber,
    ddate,
    dtime,
    dnameasistant,
    dmobile,
    demail,
    dcomments,
    dstatus
  }
  console.log(req.body)
  await docRef.set(message)

  res.status(201)
  res.send({
    ...message,
    id
  })
})

module.exports = router
