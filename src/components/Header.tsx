import { Title, Text, Divider } from "@mantine/core"

export function Header() {
    return (
        <>
            <Title
            align="left"
            size="h2"
            fw={700}
            m="xl"
            mb="xs"
            color="#E5E4E2"
            >
                Long Service Payment</Title>
            <Text
            align="left"
            size="sm"
            weight={150}
            mt="xs"
            ml="xl"
            mb="xl"
            mx="xl"
            color="#E5E4E2"
            >
                Calculate your long service payment based on the labor laws of Hong Kong
            </Text>
            <Divider my="xl" />
        </>
    )
}