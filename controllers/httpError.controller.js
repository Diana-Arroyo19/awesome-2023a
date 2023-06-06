// GET /-/-
export const getError = function (req, res) {
  // Servimos el formulario
  res.render('evaluacion');
}

// app.use((req,res) => {
//     res.sendFile(path.resolve('views', 'evaluacion.html'));
// });