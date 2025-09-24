<script lang="ts">
    async function handleFileSelect(event: any) {
        let files = event.target.files;
        console.log(files);
    }

    let selectedType = "text";

    let counter = 1;
</script>

<h1>Hello from create item</h1>
<input type="file" accept="image/*" onchange={handleFileSelect} multiple />

<table>
    <thead>
        <tr>
            <th>Attribut</th>
            <th>Type</th>
            <th>Valeur</th>
            <th>Highlight</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><input type="text" value="Titre" disabled /></td>
            <td>
                <select value="text" disabled>
                    <option value="text">Texte</option>
                    <option value="price">Prix</option>
                    <option value="size">Taille</option>
                    <option value="dimensions">Dimensions</option>
                    <option value="description">Description</option>
                </select>
            </td>
            <td>
                <input type="text" />
            </td>
            <td><input type="checkbox" /></td>
        </tr>
        <tr>
            <td><input type="text" value="Type" disabled /></td>
            <td>
                <select value="text" disabled>
                    <option value="text">Texte</option>
                    <option value="price">Prix</option>
                    <option value="size">Taille</option>
                    <option value="dimensions">Dimensions</option>
                    <option value="description">Description</option>
                </select>
            </td>
            <td>
                <input type="text" />
            </td>
            <td><input type="checkbox" /></td>
        </tr>
        {#each Array.from({ length: counter }) as _}
            <tr>
                <td><input type="text" /></td>
                <td>
                    <select bind:value={selectedType}>
                        <option value="text">Texte</option>
                        <option value="price">Prix</option>
                        <option value="size">Taille</option>
                        <option value="dimensions">Dimensions</option>
                        <option value="description">Description</option>
                    </select>
                </td>
                <td>
                    {#if selectedType === "description"}
                        <textarea></textarea>
                    {:else if selectedType === "dimensions"}
                        <input type="text" /> x <input type="text" />
                    {:else}
                        <input type="text" />
                    {/if}
                </td>
                <td><input type="checkbox" /></td>
                <td><button onclick={() => (counter -= 1)}>delete</button></td>
            </tr>
        {/each}
    </tbody>
</table>
<button onclick={() => (counter += 1)}>+</button>

<button>Créer</button>
