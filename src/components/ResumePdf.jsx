// components/ResumePdf.jsx
import React from 'react';
import {Document, Page, StyleSheet, Text, View} from '@react-pdf/renderer';

const styles = StyleSheet.create({
    page: {
        padding: 30,
        backgroundColor: '#ffffff',
        fontFamily: 'Helvetica',
    },
    header: {
        marginBottom: 20,
        textAlign: 'center',
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000000',
    },
    jobTitle: {
        fontSize: 16,
        color: '#333333',
    },
    section: {
        marginBottom: 15,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        borderBottom: '1px solid #000000',
        marginBottom: 10,
    },
    text: {
        fontSize: 12,
        color: '#555555',
        marginBottom: 5,
        maxWidth: 409
    },
    list: {

    },
    row: {
        display: 'flex',
        flexDirection: "row",
        marginLeft: 20,
        gap: 5
    },
    listItem: {
        fontSize: 12,
        color: '#555555',
        marginBottom: 2,
        textAlign: 'justify'
    },
    listItemParagraph: {
        fontSize: 12,
        color: '#555555',
        marginBottom: 5,
        maxWidth: 409,
        textAlign: 'justify'
    },
    link: {
        color: '#0000EE',
        textDecoration: 'none',
    },
    education: {
        display: "flex",
        flexDirection: "row"
    },
    degree: {
        marginLeft: "auto"
    },
    body: {
        display: "flex",
        flexDirection: "row",
        width: "100%",
        gap: 30
    },
    leftSection: {
        display: "flex",
        flexDirection: "column",
        gap: 20
    },
    mainSection: {
        display: "flex",
        flexDirection: "column"
    },
    degreeText:{
        fontSize: 12,
        color: '#555555'
    }
});

const ResumePdf = ({data}) => {
    const {generalInfo, jobRoles = []} = data;

    const DistinctLanguages = () => {
        const allLanguages = jobRoles.flatMap(role => role.languages);
        const distinctLanguages = [...new Set(allLanguages)];
        return (
            <View>
                {distinctLanguages.map((language, i) => (
                    <Text key={i} style={styles.listItem}>
                        • {language}
                    </Text>
                ))}
            </View>
        );
    };

    const DistinctTech = () => {
        const allTech = jobRoles.flatMap(role => role.technology);
        const distinctTech = [...new Set(allTech)];
        return (
            <View>
                {distinctTech.map((tech, i) => (
                    <Text key={i} style={styles.listItem}>
                        • {tech}
                    </Text>
                ))}
            </View>
        )
    }

    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.header}>
                    <Text style={styles.name}>{generalInfo.name}</Text>
                    <Text style={styles.jobTitle}>{jobRoles.find(f => f.currentRole === true).jobTitle}</Text>
                </View>
                <View style={styles.body}>
                    <View style={styles.leftSection}>
                        <View style={styles.list}>
                            <Text style={styles.sectionTitle}>Skills</Text>
                            {DistinctLanguages()}
                        </View>
                        <View style={styles.list}>
                            <Text style={styles.sectionTitle}>Technology</Text>
                            {DistinctTech()}
                        </View>
                    </View>
                    <View style={styles.mainSection}>
                        <View style={styles.section}>
                            <View style={styles.education}>
                                <View>
                                    <Text style={styles.sectionTitle}>Education</Text>
                                    {generalInfo.schooling.map((school, i) => (
                                        <View key={i}>
                                            <Text style={styles.text}>{school.name}</Text>
                                            <Text style={styles.text}>{school.location}</Text>
                                        </View>
                                    ))}
                                </View>
                                <View style={styles.degree}>
                                    <Text style={styles.sectionTitle}>Degrees</Text>
                                    {generalInfo.degrees.map((degree, i) => (
                                        <Text key={i} style={styles.text}>{degree}</Text>
                                    ))}
                                </View>
                            </View>
                        </View>

                        <View style={styles.section}>
                            <Text style={styles.sectionTitle}>About</Text>
                            <Text style={styles.text}>{generalInfo.description.toString()}</Text>
                        </View>

                        <View style={styles.section} >
                            <Text style={styles.sectionTitle}>Work Experience</Text>
                            {jobRoles.map((role, index) => (
                                <View key={index} style={styles.section}>
                                    <Text style={styles.text}>
                                        {role.yearStart} - {role.yearEnd} • {role.jobTitle} at {role.name}
                                    </Text>
                                    <View style={styles.list}>
                                        {role.descriptions.map((description, i) => (
                                            <Text key={i} style={styles.listItemParagraph}>
                                                • {description.toString()}
                                            </Text>
                                        ))}
                                    </View>
                                </View>
                            ))}
                        </View>
                    </View>
                </View>
            </Page>
        </Document>
    );
};

export default ResumePdf;
