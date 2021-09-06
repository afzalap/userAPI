import { Box, Heading } from 'native-base'
import React from 'react'

import { Text, View, StyleSheet, Image } from 'react-native'
import moment from 'moment'
import { borderBottom } from 'styled-system'

function CardComponent({ details }) {
    return (
        <Box style={styles.card}>
            <Box style={styles.cardItem}>
                <Image
                    style={styles.image}
                    source={{
                        uri: details.picture?.large,
                        width: 150,
                        height: 250
                    }}
                />
            </Box>
            <Box style={styles.cardItem}>
                <Heading style={styles.heading}>
                    {details.name?.title} {details.name?.first} {details.name?.last}
                </Heading>
            </Box>
            <Box style={styles.cardItem2}>
                <Text style={styles.text}>
                    {details.cell}
                </Text>
            </Box>
            <Box style={styles.cardItem2}>
                <Text style={styles.text}>
                    {details.email}
                </Text>
            </Box>
            <Box style={styles.cardItem2}>
                <Text style={styles.text}>
                    {details.location?.city}, {details.location?.state}, {details.location?.country}
                </Text>
            </Box>
            <Box style={styles.cardItem}>
                <Text style={styles.text}>
                    <Text style={styles.text2}>Registered at </Text>{moment(details.registered?.text).format('DD-MM-YY')}
                </Text>
            </Box>
        </Box>
    )
}

const user = ({ details }) => {
    return (
        <CardComponent details={details} />
    )
}

export default user;

const styles = StyleSheet.create({
    card: {
        width: '90%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#4f8a8b',
        borderColor: '#4f8a8b',
        borderWidth: 2,
    },
    cardItem: {
        backgroundColor: '#4f8a8b',
        marginBottom: 23,
    },
    cardItem2: {
        paddingBottom: 15,
        backgroundColor: '#4f8a8b',
        marginBottom: 23,
        borderBottomWidth: 1,
        borderColor: '#62a6a7',
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 150 / 2,
        overflow: 'hidden',
        borderWidth: 3,
        borderColor: '#fbd46d',
        marginTop: -50,
        marginBottom: 10
    },
    heading: {
        color: '#eeeeee',
    },
    text: {
        color: '#eeeeee',
        fontSize:15
    },
    text2 : {
        color: '#fbd46d',
        fontSize:15
    },
});
