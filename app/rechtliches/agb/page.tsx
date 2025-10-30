import LegalPage from '@/app/components/LegalPage'
import { Text, Heading } from '@chakra-ui/react'

export default function AGB() {
    return (
        <LegalPage title="Allgemeine Geschäftsbedingungen">
            
            <div>
                <Heading size="md" mb="2vh">§1 Geltungsbereich</Heading>
                <Text>
                    Diese Allgemeinen Geschäftsbedingungen gelten für alle Verträge...
                </Text>
            </div>

            <div>
                <Heading size="md" mb="2vh">§2 Vertragsschluss</Heading>
                <Text>
                    Der Vertrag kommt zustande durch...
                </Text>
            </div>

            <div>
                <Heading size="md" mb="2vh">§3 Preise und Zahlung</Heading>
                <Text>
                    Alle Preise verstehen sich inklusive der gesetzlichen Mehrwertsteuer...
                </Text>
            </div>

        </LegalPage>
    )
}