using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class LeverScript : MonoBehaviour
{
    public bool flipped;
    public Vector3 originalPos;
    public Vector3 newPos;
    public Quaternion originalRot;
    public Quaternion newRot;
    // Start is called before the first frame update
    void Start()
    {

    }

    // Update is called once per frame
    void Update()
    {
        if(flipped){
            transform.localPosition = newPos;
        //    transform.localRotation = newRot;
        }
        else{
           transform.localPosition = originalPos;
        //   transform.localRotation = originalRot;
        }
    }

    void OnMouseDown(){
        flipped = !flipped;
    }
}
