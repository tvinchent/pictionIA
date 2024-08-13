<template>
    <div id="topZone">
        <img src="../assets/logo.svg" id="logo"><br>


        <RouterLink to="/question"><button type="button" class="btn btn-info btn-lg mx-auto" id="jouer">JOUER</button>
        </RouterLink><br>


        <div id="explication">
            <div class="row">
                <div class="col-lg-5 col-sm-12" id="explicationTexte">
                    <div id="explicationTexteContent">
                        <h1>Piction IA</h1>
                        <p>Tente de découvrir les mots derrière l'image que l'IA a générée.</p>
                    </div>
                </div>
                <div class="col-lg-6 col-sm-12">
                    <img src="../assets/interface/exemple.png" id="illustrationHome"> <span class="response">*</span>
                </div>
            </div>
        </div>

    </div>

    <p class="response">* Exemple : rire comme une baleine</p>

</template>

<style scoped>
#topZone {
    width: 70%;
    margin: auto;
}

#jouer {
    width: 100%;
}

.inputName {
    width: 70%;
    float: right;
}

#explication {
    padding: 1em;
    margin-top: 1em;
    border-radius: 10px;
    background: rgb(221, 148, 164);
    background: linear-gradient(315deg, rgba(221, 148, 164, 1) 0%, rgba(255, 192, 203, 1) 100%);
}

#explicationTexte {
    margin: 1em;
    display: flex;
    justify-content: center;
    align-items: center;
}

#illustrationHome {
    width: 90%;
    border-radius: 1em;
}

h3 {
    color: #04F2FF;
    text-transform: uppercase;
    font-size: .85em;
    margin-top: 1em;
    font-weight: bolder;
}

#stars {
    width: 6em;
    background-color: #04F2FF;
    margin: auto;
    border-radius: 2em;
}

p {
    margin-top: 1em;
}

.response {
    color: white;
}

@media screen and (max-width: 540px) {
    #topZone {
        width: 100%;
        margin: auto;
    }

    .inputName {
        width: 100%;
    }

    #jouer {
        margin-top: 1em;
        width: 100%;
    }
}
</style>