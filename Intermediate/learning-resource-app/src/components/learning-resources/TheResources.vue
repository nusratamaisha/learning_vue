<template>
    <base-card>
        <base-button @click="setSelectedTab('stored-resources')" :mode="storedResButtonMode">Stored Resources</base-button>
        <base-button @click="setSelectedTab('add-resource')" :mode="addResButtonMode">Add Resource</base-button>
    </base-card>
    <component :is="selectedTab"></component>
</template>

<script>
import StoredResources from './StoredResources.vue';
import AddResource from './AddResource.vue';

export default{
    components:{
        StoredResources,
        AddResource,
    },
    data(){
       return{
            selectedTab: 'stored-resources',
            storedResources:[
                {
                    id:'official-guide', 
                    title: 'Vue Official Guide', 
                    description:'The official vue js documentation', 
                    link:'https://vuejs.org'
                },
                {
                    id:'google', 
                    title: 'Google', 
                    description:'Search in Google...', 
                    link:'https://google.org'
                },
            ]
        };
    },
    computed: {
        storedResButtonMode(){
            return this.selectedTab === 'stored-resources' ? null:'flat';
        },
        addResButtonMode(){
            return this.selectedTab === 'add-resource' ? null:'flat';
        }
    },
    provide(){
        return {
            resources: this.storedResources,
            addResource: this.addResource,
            deleteResource: this.deleteResource
        }
    },
    methods:{
        setSelectedTab(tab){
            this.selectedTab = tab
        }, 
        addResource(title, description, url){
            const newResource ={
                id: new Date().toISOString(),
                title: title,
                description: description,
                link: url
            }
            this.storedResources.unshift(newResource);
            this.selectedTab = 'stored-resources';
        },
        deleteResource(resourceId) {
            const resourceIndex = this.storedResources.findIndex(
                resource => resource.id === resourceId
            );
            this.storedResources.splice(resourceIndex, 1);
        }
    }
}
</script>