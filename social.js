// Coordinated Care Team Social Network
var careTeam = {
  patient: "John Doe",
  age: 50,
  gender: "male",
  providers: [
    {
    name: "Dr. Smith",
    specialty: "endocrinology",
    problems: ["neck pain","thyroid nodule","hypothyroidism","hyperthyroidism","hashimoto's disease"],
    medications: [{
      drugName: "levothyroxine",
      dose: "125 mcg",
      form: "tablet",
      ADE: []
    }],
    labs: [{
      lab: "TSH",
      date: "08/01/2021",
      result: ".01"
    },{
      lab: "TSH",
      date: "09/05/2021",
      result: "125"
    },{
      lab: "TSH",
      date: "11/1/2021",
      result: "3.4"
    }],
    procedures: []
    },{
    name: "Dr. Baker",
    specialty: "neurology",
    problems: ["neck pain","cervical spinal stenosis","TIA","peripheral neuropathy","migraines","hemifacial spasms"],
    medications: [],
    labs: [],
    procedures: []
    },{
    name: "Dr. Butcher",
    specialty: "gastroenterology",
    problems: ["neck pain","EOE","Gerd","diverticulum","tortuosity","strictures"],
    medications: [{
      drugName: "omeprazole",
      dose: "20 mg",
      form: "tablet",
      ADE: []
    },{
      drugName: "budesonide",
      dose: ".1 mg",
      form: "suspension",
      ADE: []
    }],
    labs: [],
    procedures: []
    },{
    name: "Dr. Shoemaker",
    specialty: "cardiology",
    problems: ["neck pain","TIA","PFO","targeted diastolic hypertension","dominant vertebral artery"],
    medications: [
      {
      drugName: "clopidogrel",
      dose: "75 mg",
      form: "tablet",
      ADE: [
        {
        symptom: "urticaria",
        severity: "low",
        durationDays: 14
        },
        {
        symptom: "eosinophilia",
        severity: "medium",
        durationDays: 365
        }
        ]
      },
      {
      drugName: "aspirin",
      dose: "81 mg",
      form: "tablet",
      ADE: [
        {
        symptom: "tinnitus",
        severity: "low",
        durationDays: 60
        }
        ]
      }
    ],
    labs: [],
    procedures: []
    },{
    name: "Dr. Carpenter",
    specialty: "pulminology",
    problems: ["chest pain","asthma","dependent atelectasis"],
    medications: [],
    labs: [],
    procedures: []
    }
  ]
}
for(var i = 0; i < careTeam.providers.length; i++){console.log(careTeam.providers[i].name)}

var chiefComplaint = "neck pain"
var coordinatorCount = 0
for (var i=0; i< careTeam.providers.length; i++) 
 {
  for (var j=0; j< careTeam.providers[i].problems.length; j++)
      {
        if (careTeam.providers[i].problems[j] === chiefComplaint) 
          {
            coordinatorCount++
            
          }
      }
 }
console.log(`Providers treating chief complaint' ${coordinatorCount}`)
console.log(careTeam)
