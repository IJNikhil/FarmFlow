import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    tabItem: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
    },
    icon: {
        height: 24,
        width: 24,
        marginBottom: 2,
    },
    label: {
        fontSize: 12,
        fontWeight: '600',
        flexShrink: 1,
        textAlign: 'center',
        includeFontPadding: false,
        width: '100%',
    },
});
