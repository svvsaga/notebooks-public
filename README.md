# Saga Notebooks

Dette repoet inneholder Jupyter Notebooks som kan kjøres fra Google Colab mot de ulike datasettene tilbudt fra [Saga, vegvesenets dataplattform](https://saga-datacatalog-prod-lszg.ew.r.appspot.com/).

## Hvordan gjør jeg det?

1. Du må allerede ha fått en Google Cloud-bruker med dataviter-tilgang
1. Gå til https://colab.research.google.com/
1. Velg "Upload"-fanen
1. Last opp ønsket notebook
1. Kjør notebooken; logg inn med din vegvesen.no-bruker når du får beskjed


## Legge til en ny eksempelnotebook

1. Kjør `npm install`, slik at man får installert nyttige git hooks
1. Det kan være kjekt å kopiere en eksisterende notebook og bruke som
   utgangspunkt for den nye du skal lage
1. Hvis du lagd din notebook basert på en eksisterende notebook, pass på at det ikke står et utdatert navn inne i notebookens json,
   slik at feltet `name` matcher filnavnet på notebooken. Dette navnet brukes når notebooken lastes opp og vises i Colab.

   ```
   ...
    "metadata": {
     "colab": {
      "name": "bigquery:nvdb.curated.tunneler_med_lop.ipynb",
     },
   ...
   ```


1. Vær obs på at den første cellen i notebooken må ha med metadata tags, slik at
   papermill klarer å erstatte parameterene i notebooken

   ```
   ...
      "metadata": {
       "tags": [
        "parameters"
       ]
      },
   ...
   ```
