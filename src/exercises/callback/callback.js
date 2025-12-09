// run führt die drei Callbacks strikt hintereinander aus (cb1 -> cb2 -> cb3).
// Dies ist ein reines Callback-Beispiel ohne React-State oder UI.
function run(cb1, cb2, cb3) {
  cb1()
  cb2()
  cb3()
}


run(
  () => console.log('1. Es geht los'),
  () => console.log('2. Es wird ausgeführt'),
  () => console.log('3. Es wurde ausgeführt'),
)
