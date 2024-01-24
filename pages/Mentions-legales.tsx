import {
    Layout,
    LayoutContent,
    LayoutHeader,
    LayoutTitle,
} from '@/components/layout/Layout'

const MentionsLegales = () => {
    return (
        <div className="m-auto min-h-[80vh] max-w-4xl">
            <Layout>
                <LayoutHeader>
                    <LayoutTitle elementId="mentions-legales">
                        Mentions Légales
                    </LayoutTitle>
                </LayoutHeader>
                <LayoutContent>
                    <h2 className="text-xl text-accent">
                        Créateur, Editeur et responsable de la publication
                    </h2>
                    <div className="my-2 ml-4 text-lg leading-relaxed">
                        <p>Vivian Bruchon</p>
                        <div className="flex flex-col gap-2 md:flex-row">
                            <p>
                                <span className="mr-2">Adresse :</span> 46,
                                Avenue de l'Yser
                            </p>
                            <span>-</span>
                            <p>26000 VALENCE</p>
                        </div>
                        <p>
                            <span className="mr-2">Tél : </span>
                            <a
                                className="hover:underline"
                                href="tel:0695030934"
                            >
                                06 95 03 09 34
                            </a>
                        </p>
                        <p>
                            <span className="mr-2">Mail : </span>
                            <a
                                className="hover:underline"
                                href="mailto:vivian.bruchon@gmail.com"
                            >
                                vivian.bruchon@gmail.com
                            </a>
                        </p>
                        <p>
                            <span className="mr-2">SIREN :</span> 85305526700019
                        </p>
                    </div>

                    <h2 className="mb-2 mt-4 text-lg text-accent">
                        Support technique
                    </h2>
                    <div className="ml-4 text-lg leading-relaxed">
                        <p>
                            <span className="mr-2">Hébergement :</span>
                            <span className="mr-2">O2SWITCH</span>
                        </p>
                        <p>
                            <span className="mr-2">Siège social :</span>
                            <span className="mr-2">
                                222-224 Boulevard Gustave
                            </span>
                            Flaubert 63000 Clermont-Ferrand
                        </p>
                    </div>
                </LayoutContent>
            </Layout>
        </div>
    )
}

export default MentionsLegales
