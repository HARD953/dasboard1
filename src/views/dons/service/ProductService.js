
export class ProductService {


    getSuperAdmins() {
        return fetch('https://apivulnerable.herokuapp.com/alsuperadmin/').then(res => res.json()).then(d => d);
    }
    getAdmins() {
        return fetch('https://apivulnerable.herokuapp.com/aladmin/').then(res => res.json()).then(d => d);
    }
    getAgentsParAdmins() {
        return fetch('https://apivulnerable.herokuapp.com/alagent/').then(res => res.json()).then(d => d);
    }
    getAgents() {
        return fetch('https://apivulnerable.herokuapp.com/allagent/').then(res => res.json()).then(d => d);
    }
    getRecPers() {
        return fetch('https://apivulnerable.herokuapp.com/vulnerablegs/').then(res => res.json()).then(d => d);
    }
    getVulVie() {
        return fetch('https://apivulnerable.herokuapp.com/vulnerablecon/').then(res => res.json()).then(d => d);
    }
    getVulEtu() {
        return fetch('https://apivulnerable.herokuapp.com/vulnerableetud/').then(res => res.json()).then(d => d);
    }
    getVulPhy() {
        return fetch('https://apivulnerable.herokuapp.com/vulnerablephys/').then(res => res.json()).then(d => d);
    }
    getVulChom() {
        return fetch('https://apivulnerable.herokuapp.com/vulnerableoccup/').then(res => res.json()).then(d => d);
    }
    getDonateurs() {
        return fetch('https://apidons.herokuapp.com/listdonateur/').then(res => res.json()).then(d => d);
    }
    getArgent() {
        return fetch('https://apidons.herokuapp.com/listargea/').then(res => res.json()).then(d => d);
    }
    getNature() {
        return fetch('https://apidons.herokuapp.com/listnaturea/').then(res => res.json()).then(d => d);
    }
    getIndividus() {
        return fetch('https://apivulnerable.herokuapp.com/individus/').then(res => res.json()).then(d => d);
    }
    getMenages() {
        return fetch('https://apivulnerable.herokuapp.com/vulnerablegs/').then(res => res.json()).then(d => d);
    }
    getConditionsVie() {
        return fetch('https://apivulnerable.herokuapp.com/vulnerablecon/').then(res => res.json()).then(d => d);
    }
    getConditionsPhys() {
        return fetch('https://apivulnerable.herokuapp.com/vulnerablephys/').then(res => res.json()).then(d => d);
    }
    getChom() {
        return fetch('https://apivulnerable.herokuapp.com/vulnerableoccup/').then(res => res.json()).then(d => d);
    }
    getNiveauEtude() {
        return fetch('https://apivulnerable.herokuapp.com/vulnerableetud/').then(res => res.json()).then(d => d);
    }




}
    