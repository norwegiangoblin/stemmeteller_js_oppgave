//setter stemmer til forje sesion eller 0
let votes_AP = localStorage.getItem("votes_AP") || 0;
let votes_hoyret = localStorage.getItem("votes_hoyret") || 0;
let votes_venstre = localStorage.getItem("votes_venstre") || 0;
let votes_SP = localStorage.getItem("votes_SP") || 0;
let votes_SV = localStorage.getItem("votes_SV") || 0;
let votes_NKP = localStorage.getItem("votes_NKP") || 0;

//teller stemmer
function voteAP() {
    votes_AP++;
    localStorage.setItem("votes_AP", votes_AP)
    updateChart();
}
function voteH() {
    votes_hoyret++;
    localStorage.setItem("votes_hoyret", votes_hoyret)
    updateChart();
}
function voteV() {
    votes_venstre++;
    localStorage.setItem("votes_venstre", votes_venstre)
    updateChart();
}
function voteSP() {
    votes_SP++;
    localStorage.setItem("votes_SP", votes_SP)
    updateChart();
}
function voteSV() {
    votes_SV++;
    localStorage.setItem("votes_SV", votes_SV)
    updateChart();
}
function voteNKP() {
    votes_NKP++;
    localStorage.setItem("votes_NKP", votes_NKP)
    updateChart();
}

//funktion som resetter stemmer
function reset() {
    localStorage.setItem("votes_AP", 0)
    localStorage.setItem("votes_hoyret", 0)
    localStorage.setItem("votes_venstre", 0)
    localStorage.setItem("votes_SP", 0)
    localStorage.setItem("votes_SV", 0)
    localStorage.setItem("votes_NKP", 0)
    votes_AP = localStorage.getItem("votes_AP") || 0;
    votes_hoyret = localStorage.getItem("votes_hoyret") || 0;
    votes_venstre = localStorage.getItem("votes_venstre") || 0;
    votes_SP = localStorage.getItem("votes_SP") || 0;
    votes_SV = localStorage.getItem("votes_SV") || 0;
    votes_NKP = localStorage.getItem("votes_NKP") || 0;
    updateChart()
}

//grafen
const ctx = document.getElementById('myChart');
let chart1 = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['AP', 'HØYRET', 'VENSTRE', 'SP', 'SV', 'NKP'],
        datasets: [{
            label: '# av stemmer',
            data: [votes_AP, votes_hoyret, votes_venstre, votes_SP, votes_SV, votes_NKP],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

//function som oppdaterer grafen når noen stemmer
function updateChart() {
    chart1.destroy()
    chart1 = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['AP', 'HØYRET', 'VENSTRE', 'SP', 'SV', 'NKP'],
            datasets: [{
                label: '# av stemmer',
                data: [votes_AP, votes_hoyret, votes_venstre, votes_SP, votes_SV, votes_NKP],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}