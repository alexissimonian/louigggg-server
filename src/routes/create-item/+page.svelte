<script lang="ts">
    async function handleFileSelect(event: any) {
        let files = event.target.files;
        console.log(files);
    }
</script>

<h1>Hello from create item</h1>
<input type="file" accept="image/*" onchange={handleFileSelect} multiple />

<form action="?/create">
    <label for="title">
        Titre
        <input name="title" type="text">
    </label>
    <label for="price">
        Prix
        <input name="price" type="number">
    </label>
    <label for="type">
        Type
        <select name="type">
            <option value="clothing">Vêtement</option>
            <option value="painting">Tableau</option>
            <option value="print"></option>
        </select>
    </label>
</form>
<button>Créer</button>
