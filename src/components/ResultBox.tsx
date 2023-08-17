import React, { useState, useEffect } from 'react';
import { Divider, Button, Box, Text, SimpleGrid } from '@mantine/core';

export default function ResultBox() {
    return (
        <Box
            sx={(theme) => ({
                backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[0],
                padding: theme.spacing.xl,
                borderRadius: theme.radius.md,
                margin: theme.spacing.lg,
                mt: theme.spacing.xl,
                // cursor: 'pointer',

            })}
        >
            <Text
                align="left"
                size="xl"
                fw={700}
                color="white"
                mt="lg"
            >Long Service Payment Due </Text>
            <Text
                color="#90D2FF"
                ta="left"
                fz="lg"
                fw={700}
            > $ 32995 HKD
            </Text>
            <Text
                ta="left"
                fz="xs"
                fw={300}
                fs="italic"
                mb="sm"
            > ($5420 * 2/3 * 9) + ($5420 * 2/3 * 44/365)
            </Text>
            <Divider
                my="lg"
                size="sm"
            />
            <SimpleGrid
                cols={2}
                spacing="xl"
                verticalSpacing="xs"
                mb="xl">
                <Text color="white" fz="sm">Last month's wage </Text>
                <Text color="white">$5420 HKD </Text>
                <Text color="white" fz="sm">Years of service </Text>
                <Text color="white">9 years, 44 days </Text>
            </SimpleGrid>
            <Button
                fullWidth
                //enlarge the button's width
                m="auto"
                size="lg"
                radius="md"
                variant="gradient"
                gradient={{ from: 'indigo', to: 'cyan' }}>
                Save as PDF
            </Button>
            <Button
                fullWidth
                //enlarge the button's width
                mt="xs"
                m="auto"
                size="lg"
                radius="md"
                color="gray"
            // variant="gradient"
            // gradient={{ from: 'indigo', to: 'cyan' }}
            >Calculate again
            </Button>
        </Box>
    )
}