import './styles.css';

export default function HomeCommunityPage() {
    return (
        <main>
            <section id="section-home-community">
                <div className="home-community-content container">
                    <div className="home-community-welcome">
                        <h2>Seja muito bem vindo, Eduardo</h2>
                    </div>
                    <div className="home-community-donations">
                        <div className="home-community-search-location">
                            <h3>Veja as doações que estão em </h3>
                            <select name="" id="">
                                <option value="opcao1">Minas Gerais</option>
                                <option value="opcao2">Espirito Santo</option>
                                <option value="opcao3">Rio de Janeiro</option>
                                <option value="opcao4">São Paulo</option>
                            </select>
                        </div>
                        <div className="home-community-donations-list">

                        </div>
                    </div>


                </div>
            </section>
        </main>
    );
}