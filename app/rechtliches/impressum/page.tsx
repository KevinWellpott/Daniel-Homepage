import LegalPage from '@/app/components/LegalPage'
import { Text, Heading } from '@chakra-ui/react'

export default function Impressum() {
    return (
        <LegalPage title="Impressum">
            
            <Text>
                <strong>CleanItUp GmbH</strong><br />
                Musterstraße 123<br />
                32545 Bad Oeynhausen<br />
                Deutschland
            </Text>

            <div>
                <Heading size="md" mb="2vh">Kontakt</Heading>
                <Text>
                    Telefon: 05231 / 987 65 43<br />
                    E-Mail: info@cleanitup.de
                </Text>
            </div>

            <div>
                <Heading size="md" mb="2vh">Vertreten durch</Heading>
                <Text>
                    Geschäftsführer: Max Mustermann
                </Text>
            </div>

            <div>
                <Heading size="md" mb="2vh">Registereintrag</Heading>
                <Text>
                    Registergericht: Amtsgericht Bad Oeynhausen<br />
                    Registernummer: HRB 12345
                </Text>
            </div>

            <div>
                <Heading size="md" mb="2vh">Umsatzsteuer-ID</Heading>
                <Text>
                    Umsatzsteuer-Identifikationsnummer gemäß §27a Umsatzsteuergesetz: DE123456789
                </Text>
            </div>

        </LegalPage>
    )
}