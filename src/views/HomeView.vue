<template>
    <div id="topZone">
        <img src="../assets/logo.svg" id="logo">
        <div class="row">
            <div class="col-lg-6 col-sm-12">
                <input type="text" class="form-control inputName input" placeholder="Entrez votre pseudo" ref="focusName" maxlength="12" id="nameUser">
            </div>
            <div class="col-lg-6 col-sm-12">
                <RouterLink to="/question"><button type="button" class="btn btn-info" id="jouer">JOUER</button></RouterLink>
            </div>
        </div>

        <div id="explication">
            <div class="row">
                <div class="col-lg-5 col-sm-12" id="explicationTexte">
                    <div id="explicationTexteContent">
                        <h2>Une IA parfois ça fait nimp'.</h2>
                        <p>Tente de découvrir le mot derrière l'image qu'elle génère</p>
                    </div>
                </div>
                <div class="col-lg-5 col-sm-12">
                    <img src="../assets/interface/illu-hp-detoure.webp" id="illustrationHome">
                </div>
            </div>
        </div>
        <h3>Déjà plus de 10 joueurs satisfaits</h3>
        <div id="stars">
            <font-awesome-icon icon="fa-solid fa-star" />
            <font-awesome-icon icon="fa-solid fa-star" />
            <font-awesome-icon icon="fa-solid fa-star" />
            <font-awesome-icon icon="fa-solid fa-star" />
            <font-awesome-icon icon="fa-solid fa-star" />
        </div>
    </div>

</template>

<style scoped>

#topZone{
    width: 70%;
    margin: auto;
}
#jouer{
    float: left;
    width: 70%;
}
.inputName{
    width: 70%;
    float: right;
}
#explication{
    padding: 1em;
    margin-top: 1em;
    border-radius: 10px;
    background: rgb(221,148,164);
    background: linear-gradient(315deg, rgba(221,148,164,1) 0%, rgba(255,192,203,1) 100%);
}
#explicationTexte{
    margin: 1em;
    display: flex;
    justify-content: center;
    align-items: center;
}
#illustrationHome{
    width: 100%;
}
h3{
    color: #04F2FF;
    text-transform:uppercase;
    font-size: .85em;
    margin-top: 1em;
    font-weight: bolder;
}
#stars{
    width: 6em;
    background-color: #04F2FF;
    margin: auto;
    border-radius: 2em;
}
@media screen and (max-width: 1024px) {
    #topZone{
        width: 100%;
        margin: auto;
    }
    .inputName{
        width: 100%;
    }
    #jouer{
        margin-top: 1em;
        width: 100%;
    }
}
</style>

<script>
export default{
    mounted() {
        this.$nextTick(() => this.$refs.focusName.focus())
    }
}
</script>
    