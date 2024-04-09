using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class KnobScript : MonoBehaviour
{
    bool flipped;
    public Vector3 originalPos;
    public Vector3 newPos;
    // Start is called before the first frame update
    void Start()
    {

    }

    // Update is called once per frame
    void Update()
    {
        if(flipped){
            transform.localPosition = newPos;
        }
        else{
           transform.localPosition = originalPos;
        }
    }

    void OnMouseDown(){
        flipped = !flipped;
    }
}
