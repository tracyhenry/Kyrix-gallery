# Kyrix: Democratizing Details-on-demand Data Visualizations

Kyrix is an [open-source system](https://github.com/tracyhenry/kyrix) which facilitates the creation of data visualizations with details-on-demand interactions. As such, it supports a pan/zoom/jump interface similar to Google Maps. The benefit of such systems is the interface can be learned quickly and no user manual is required.  Also, it facilitates browsing over large amounts of data, drilling into areas of interest to get more information.  Although Kyrix is a natural on geographic data, it can also be used on many other kinds of data that are amenable to a two-dimensional layout:

*Please help insert this video here*: https://youtu.be/DyQNJk8k8ac

Many detail-on-demand systems have been constructed for various kinds of data. However, these have generally been hard-coded to support exactly that class of applications. In contrast, Kyrix is easily programmable to support any kinds of objects, not just maps or satellite imagery.

The Kyrix system makes use of the following concepts:
* Any number of two dimensional **canvases**, on which users can place objects.
* An **SQL command** that can retrieve from a database the objects to appear on the canvas.
* A **location function** for each canvas, which indicates where on the canvas any object should be placed.
* A **rendering function** that determines the visual representation of an object on the screen. Rendering functions must be written in D3, which has a large prebuilt library of such functions.
* The notion of **layers** of a canvas so multiple kinds of objects can appear on the screen.
* The notion of a **jump**, whereby a user can point to an object and move to one or more related canvases.  One special case of a jump is to obtain more information, i.e., drill down.

# Kyrix-S
Kyrix-S is an extension to Kyrix, which focuses on optimizing large-scale scatterplot-like visualizations. By augmenting Kyrix with a more concise visualization grammar, Kyrix-S enables the developer to quickly author a complex multi-zoom-level visualization in a few tens of lines of code. For example, Kyrix-S turns
```javascript
{
    data: {  
        db: "nba",  
        query: “SELECT * FROM games"  
    },  
    layout: {  
        x: {  
            field: "home_score",  
            extent: [69, 149]  
        },  
        y: {  
            field: "away_score",  
            extent: [69, 148]  
        },  
        z: {  
            field: "agg_rank",  
            order: "asc"  
        }  
    },  
    marks: {  
        cluster: {  
            mode: "circle"
        },  
        hover: {  
            rankList: {  
                mode: "tabular",  
                fields: ["home_team", "away_team", "home_score", "away_score"],  
                topk: 3  
            },  
            boundary: "convexhull"  
         }  
    },  
    config: {  
        axis: true  
    }  
};
```
into
<p align="center">
<a href="https://github.com/tracyhenry/Kyrix/tree/master/compiler/examples/nba_cmv">
<img src="https://media.giphy.com/media/d7xqGWf1Q4sftNOuZd/giphy.gif" width = "375"/>
</a>
</p>

Another example visualization with one billion Reddit comments can be found [here](https://youtu.be/ccES97ni_vI). Behind the scenes, Kyrix-S talks to Citus, a multi-node distributed PostgresQL database. We developed a distributed algorithm which automatically infers object placement on all zoom levels, and stores them in Citus for scalability. Kyrix-S is now [open-sourced](https://github.com/tracyhenry/kyrix) as part of the first public release of Kyrix.


## Kyrix in the Wild
We have applied Kyrix to build an in-production system for the neurology group at Massachusetts General Hospital (MGH) on 30T of EEG sleep study data ([demo](https://youtu.be/fZ32cE8KEi0)). We also have a visual data explorer for the infectious disease group at MGH, a genomics browser (in conjunction with Paradigm4), a roadside assistance viewer for Agero, a browser into Internet traffic (in conjunction with Recorded Futures), and a browser for the MIT Data Civilizer data integration system. Some Kyrix demos videos appear at the bottom of this page.

We'd like to learn more about real-world application requirements to make Kyrix better. If you have a Kyrix app in mind for your data, please reach out to us (Wenbo Tao: wenbo@mit.edu, and Mike Stonebraker: stonebraker@csail.mit.edu). 

# Other video demos
*please keep the original three video demos here*

# Citations

Wenbo Tao, Xinli Hou, Adam Sah, Leilani Battle, Remco Chang and Michael Stonebraker. [Kyrix-S: Authoring Scalable Scatterplot Visualizations of Big Data](https://arxiv.org/pdf/2007.15904.pdf). IEEE Information Visualization (InfoVis at VIS) 2020.

Wenbo Tao, Xiaoyu Liu, Yedi Wang, Leilani Battle, Cagatay Demiralp, Remco Chang and Michael Stonebraker. [Kyrix: Interactive Pan/Zoom Visualizations at Scale](http://web.mit.edu/wenbo/www/kyrix_eurovis.pdf). Eurographics Conference on Visualization (EuroVis) 2019.

Wenbo Tao, Xiaoyu Liu, Cagatay Demiralp, Remco Chang and Michael Stonebraker. [Kyrix: Interactive Visual Data Exploration at Scale](http://cidrdb.org/cidr2019/papers/p70-tao-cidr19.pdf). Conference on Innovative Data Systems Research (CIDR) 2019.
