import LegalPage from '@/app/components/LegalPage'
import { Text, Heading } from '@chakra-ui/react'

export default function Datenschutz() {
    return (
        <LegalPage title="Datenschutzerklärung">
            
            <div>
                <Heading size="md" mb="2vh">1. Datenschutz auf einen Blick</Heading>
                <Text>
                    Die folgenden Hinweise geben einen einfachen Überblick darüber, 
                    was mit Ihren personenbezogenen Daten passiert, wenn Sie diese 
                    Website besuchen...
                </Text>
            </div>

            <div>
                <Heading size="md" mb="2vh">2. Allgemeine Hinweise</Heading>
                <Text>
                    Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst...
                </Text>
            </div>

            <div>
                <Heading size="md" mb="2vh">3. Datenerfassung auf dieser Website</Heading>
                <Text>
                    Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber...
                </Text>
            </div>

        </LegalPage>
    )
}