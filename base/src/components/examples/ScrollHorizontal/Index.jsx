import React from "react";
import { Image, View, SafeAreaView, ScrollView } from "react-native";
import style from "./Style.jsx";
import { Text, Button, Input } from 'galio-framework';

export default function ScrollHorizontal() {
    return (
        <SafeAreaView>
            <ScrollView horizontal>
                <View style={[style.container, style.container_1]}>
                    <View style={[style.item, style.item_1]}>
                        
                    </View>
                    <View style={[style.item, style.item_2]}>
                        
                    </View>
                    <View style={[style.item, style.item_3]}>
                        
                    </View>
                    <View style={[style.item, style.item_4]}>
                        
                    </View>
                    <View style={[style.item, style.item_5]}>
                        
                    </View>
                </View>
            </ScrollView>
            <ScrollView>
                <View style={[style.container, style.container_2]}>
                    <View style={[style.item, style.item_1]}>
                                    
                    </View>
                    <View style={[style.item, style.item_2]}>
                                    
                    </View>
                    <View style={[style.item, style.item_3]}>
                                    
                    </View>
                    <View style={[style.item, style.item_4]}>
                                    
                    </View>
                    <View style={[style.item, style.item_5]}>
                                    
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}